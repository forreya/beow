#!/bin/sh
until python3 manage.py migrate; do
	echo "Updating database schema..."
	sleep 1
done

python3 manage.py runserver 0.0.0.0:2809