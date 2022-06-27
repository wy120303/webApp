from functools import wraps
from flask import Flask, make_response, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, String, Float
from flask_marshmallow import Marshmallow
from sqlalchemy import Column, ForeignKey
from sqlalchemy.orm import relationship
import os
import jwt
# import uuid  # for public id
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
from flask_migrate import Migrate
from flask_cors import CORS, cross_origin

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'YJdqx7pLnGDKEFX1gWY'
db = SQLAlchemy(app)
ma = Marshmallow(app)
migrate = Migrate(app, db)

""""
class Account
    id:int
    username: str
    email: str
    password: str
    ride_offered: an array of Ride
    ride_booked: an array of Ride
"""


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(Integer(), primary_key=True)
    username = db.Column(String(25), nullable=False, unique=True)
    email = db.Column(String(80), unique=True, nullable=False)
    password = db.Column(String(80))

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def __repr__(self):
        return f"<User username={self.username} email={self.email}>"


"""
class Ride
    id: int
    date: a string in the format of mm/dd/yyyy
    time: a string in the format of hh:mm
    departure: a string that represents a city name
    destination: a string that represents a city name
    num_seats: an int
    fee: a float
"""


class Rides(db.Model):
    _tablename_ = "rides"
    id = Column(Integer(), primary_key=True)
    date = Column(String(25))
    time = Column(String(25))
    departure = Column(String(25))
    destination = Column(String(25))
    num_seats = Column(Integer())
    fee = Column(Float())
    driver_id = Column(Integer, ForeignKey("users.id"))
    driver = relationship("User", foreign_keys=[driver_id])
    customer_id = Column(Integer, ForeignKey("users.id"))
    customer = relationship("User", foreign_keys=[customer_id])

    def __repr__(self):
        return f"<date={self.date} time={self.time} departure={self.departure} destination={self.destination} num_seats={self.num_seats} fee={self.fee}>"

    def __init__(self, date, time, departure, destination, num_seats, fee, driver_id):
        self.date = date
        self.time = time
        self.departure = departure
        self.destination = destination
        self.num_seats = num_seats
        self.fee = fee
        self.driver_id = driver_id
        self.customer_id = None


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'email',
                  'ride_offered', 'ride_booked', 'password')


user_schema = UserSchema(many=False)
users_schema = UserSchema(many=True)


class RideSchema(ma.Schema):
    class Meta:
        fields = ('id', 'date', 'time', 'departure', 'destination',
                  'num_seats', 'fee', 'driver_id', 'customer_id')


ride_schema = RideSchema(many=False)
rides_schema = RideSchema(many=True)


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        #  if 'x-access-token' in request.headers:
        # jwt is passed in the request header
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        # return 401 if token is not passed
        if token is None:
            return jsonify({'message': 'Token is missing !!'}), 401

        try:
            data = jwt.decode(
                token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user = User.query\
                .filter_by(public_id=data['public_id'])\
                .first()
        except Exception:
            return jsonify({
                'message': 'Token is invalid !!'
            }), 401
        return f(current_user, *args, **kwargs)

    return decorated


# register an account
@app.route('/register', methods=['POST'])
def register():
    # creates a dictionary of the form data
    data = request.form
    print("here")
    # gets name, email and password
    name, email = data.get('name'), data.get('email')
    password = data.get('password')

    # checking for existing user
    user = User.query\
        .filter_by(email=email).first()
    if not user:
        # database ORM object
        user = User(
            # id=str(uuid.uuid4()),
            username=name,
            email=email,
            password=generate_password_hash(password)
        )
        # insert user
        db.session.add(user)
        db.session.commit()

        return make_response('Successfully registered.', 201)
    else:
        # returns 202 if user already exists
        return make_response('User already exists. Please Log in.', 202)


# log into account
@app.route('/login', methods=['POST'])
def login():
    # creates dictionary of form data
    auth = request.form

    if not auth or not auth.get('email') or not auth.get('password'):
        # returns 401 if any email or / and password is missing
        return make_response(
            'Could not verify',
            401,
            {'WWW-Authenticate': 'Basic realm ="Login required !!"'}
        )

    user = User.query\
        .filter_by(email=auth.get('email'))\
        .first()

    if not user:
        # returns 401 if user does not exist
        return make_response(
            'Could not verify',
            401,
            {'WWW-Authenticate': 'Basic realm ="User does not exist !!"'}
        )

    if check_password_hash(user.password, auth.get('password')):
        # generates the JWT Token
        token = jwt.encode({
            'public_id': user.id,
            'exp': datetime.utcnow() + timedelta(minutes=30)
        }, app.config['SECRET_KEY'])

        return make_response(jsonify({'token': token}), 201)
    # returns 403 if password is wrong
    return make_response(
        'Could not verify',
        403,
        {'WWW-Authenticate': 'Basic realm ="Wrong Password !!"'}
    )


# Post a Ride
# @token_required
@app.route('/ride', methods=['POST'])
def add_ride():
    date = request.json['date']
    time = request.json['time']
    departure = request.json['departure']
    destination = request.json['destination']
    num_seats = request.json['num_seats']
    fee = request.json['fee']
    driver_id = request.json['driver_id']

    new_ride = Rides(
        date, time, departure, destination, num_seats, fee, driver_id)

    db.session.add(new_ride)
    db.session.commit()

    return ride_schema.jsonify(new_ride)


# Get all Rides
@app.route("/ride", methods=["GET"])
@cross_origin()
# @token_required
def get_all_rides():
    dep = request.form.get('departure')
    des = request.form.get('destination')
    if None in (dep, des):
        rides = Rides.query.all()
    else:
        rides = Rides.query.filter_by(departure=dep, destination=des).all()
    result = rides_schema.dump(rides)
    return jsonify(result)


# Get a specific ride
@app.route("/ride/<id>", methods=["GET"])
# @token_required
def get_ride(id):
    r = Rides.query.get(id)
    return {'id': r.id, 'date': r.date, 'time': r.time, 'departure':
            r.departure, 'destination': r.destination, 'num_seats':
            r.num_seats, 'fee': r.fee}


# delete a ride
@app.route('/ride/<id>', methods=['DELETE'])
# @token_required
def delete(id):
    ride = Rides.query.get(id)
    db.session.delete(ride)
    db.session.commit()
    return "The ride has been successfully removed"


# comfirm booking
@app.route('/ride/<id>/confirm', methods=['PUT'])
# @token_required
def comfirm_ride(current_user, id):
    ride = Rides.query.get(id)
    ride.customer_id = current_user.id
    db.session.commit()
    return "Ride has been booked"


# cancel booking
@app.route('/ride/<id>/cancel', methods=['PUT'])
# @token_required
def delete_ride(id):
    ride = Rides.query.get(id)
    ride.customer_id = None
    db.session.commit()
    return "Ride has been cancelled"


if __name__ == '__main__':
    db.create_all
    app.run(debug=True)
