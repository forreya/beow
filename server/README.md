### Setting Up Backend:

1. Install LTS of Python & Django:

2. Create New Django Project:

```
django-admin startproject server
cd server
```

3. Create New Django App

```
python3 manage.py startapp app
```

4. Synchronize Django models with the database schema

```
python3 manage.py migrate
```

5. Run project

```
python manage.py runserver
```