# Test project

It connects to Bing API service and displays news related with the current search.

## Demo

https://analytics-searchtest.herokuapp.com/

## Requirements

- Ruby 2.4.2
- NodeJS 6.0.0+
- Yarn 0.25.2+
- PostgreSQL
- Heroku toolbelt

## Configuring

```shell
  git clone git@github.com:alagos/test-analytics.git
  cd test-analytics
  bundle install
  yarn install
  rails db:create db:setup
```

## Running

Development:

```shell
  foreman start -f Procfile.dev
```

Production:

```shell
  heroku create
  git push heroku master
  heroku run rails db:create db:migrate
```

