#!/bin/sh

poetry run python manage.py migrate --no-input
poetry run python manage.py collectstatic --no-input


gunicorn tools_app.wsgi:application --bind 0.0.0.0:8000
