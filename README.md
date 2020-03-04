# Demo App

Employees check-in/checkout-out system

## Features

- Support multiple roles (Administrator, Employee)
- Administrator can:
- Register employee
- Search employees by name, last name, email, gender
- List job attendance for all employees, showing the total worked hours for a range of dates.

Employee can:
- CheckIn - Checkout
- List job attendance for each day showing its total hours per day.

### Stack
- Ruby on Rails
- React
- Rspec
- API debe estar documentado
- PostgreSQL

## Running the app

```sh
# install bundler if not available
gem install bundler

# install gem dependencies
bundle install

# install npm dependencies
npm install

# create the postgres databases
# update config/database.yml details if needed
rake db:create

# generate assets for development
npm run webpack

# start server
rails s
```

## Webpack scripts

The frontend assets on this repository are placed on a more accessible directory, at
`front/js` and `front/css`

`npm run webpack`
Builds the assets for development mode.

`npm run webpack:watch`
Builds the assets for development mode, and rebuilds on every detected change.

`npm run webpack:production`
Builds the assets for production mode, output files are hashed.

## Run in Docker (optional)

Repository contains a basic Dockerfile for running the app in production mode.
Assets should be compiled first using webpack outside of the container.

```sh
# build docker image
docker build -t rails-react-boilerplate .

# run docker image
docker run -p 3000:3000 -e SECRET_KEY_BASE=abcd rails-react-boilerplate
```
