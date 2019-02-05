
# reloj

https://protected-ravine-46810.herokuapp.com/

## Introduction

This projects aims to be:

* Project example to system for clock-in and clock-out employees

Specification summary:

* RESTful api.
* Users management.
* Rspec testing.
* Json serialization

Here is its counterpart client app that consumes data from this api ->


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
bin/rake start
```

* Run tests:
```
rspec
```
* Deploying
Rails serving the Webpack bundle. Using NPM’s postinstall command

#### RESTful Api
The app includes only the rails-api related modules,
so it's thinner than a normal app but lacks some features
(that can be manually added if required).
The architecture of the api follows rails and http restful good practices
such as:
* post 'admin/token' 
* post 'employee/token'
* get 'admins/current'
* get 'employees/current'
* get 'employees/:id/attendances'
* post 'employees/:id/attendances'
* post 'admins' 
* post 'employees' 
* get 'employees'

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
- [] 

#### Contributors