
# reloj

https://protected-ravine-46810.herokuapp.com/

## Introduction
* Project example to system for clock-in and clock-out employees

Specification summary:

* RESTful api.
* Users management.
* Json serialization

## Quick start

* Install ruby version 2.5.0 and set it with your ruby environment manager
([more info here](https://www.ruby-lang.org/en/documentation/installation/)).

* Install Postgres and start the PostgreSQL server in the foreground
([more info here](https://wiki.postgresql.org/wiki/Detailed_installation_guides)).

* Clone the repository and get inside it:
```
git clone git://github.com/jordifierro/rails-api-base.git --origin rails-api-base your-project-name
cd your-project-name
```

* Setup the gems:
```
bundle install
```

* Run App
```
bin/rake start or /rails s && cd client/ npm start
```

* Run tests:
```
rspec
```
* Deploying
Rails serving the Webpack bundle. Using NPM’s postinstall command

#### RESTful Api
The app includes only the rails-api related modules,

* post 'user/token' # {"auth": { "email": "email@email.com", "password": "password" } } - return the JWT
* get 'users/current' # Return the current user 
* post 'employees' # Create a new user with admin_id
* get 'employees' # Return all the employees that belong to admin
* post 'employees/:id/attendances' # create new attendance for employee with ID
* put 'employees/:id/attendances' # Update the attendances with end time
* get 'employees/:id/attendances' # return all the attendances of employee

#### Users Management
The chosen solution uses `has_secure_password` with knock Gem

A token is returned when the users login/signup
and it has to be set to `headers['Authorization']`
on later requests to authenticate them.

#### Json output serialization
The responses are formatted using the
[ActiveModelSerializers](https://github.com/rails-api/active_model_serializers)
gem.

#### Todo List
- [] Allow to return to the current status of the clock if the user go to different page or refresh the page

#### Contributors