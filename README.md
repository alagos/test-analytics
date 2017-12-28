# Helpjuice test project

It connects to Bing API service and displays news related with the current search.

## Requirements

- Ruby 2.4.2
- PostgreSQL
- Heroku toolbelt

## Configuring

```shell
  git clone git@github.com:alagos/helpjuice-analytics.git
  cd helpjuice-analytics
  bundle install
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
```

