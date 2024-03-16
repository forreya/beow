### Setting Up Backend:

1. Install LTS of Python & Django:

2. Create New Django Project:

```
django-admin startproject server
cd server
```

3. Synchronize Django models with the database schema

```
python3 manage.py migrate
```

4. Run project

```
python manage.py runserver
```

5. Create New Django App

For example, 'users', to handle authentication & authorization:
```
python3 manage.py startapp users
```