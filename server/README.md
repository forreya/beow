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

### Dockerizing:

1. Create a virtual environment to create a `requirements.txt` file:

```
$ python3 -m venv .venv // creates virtual environment named .venv
$ source .venv/bin/activate // activates the virtual environment
(.venv) $ python3 -m pip install django // installs django into the virtual environment
(.venv) $ pip freeze > requirements.txt // generate a list of all the Python packages installed in the virtual environment 
(.venv) $ deactivate // deactivates the virtual environment
```

The `requirements.txt` file contains the contents of the virtual environment. After generating the `requirements.txt` file, you can just delete the `.venv` folder.

2. Create Dockerfile

### Setup AWS CLI Configuration

See: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html

Setup for 'long term credentials' using the guide above.