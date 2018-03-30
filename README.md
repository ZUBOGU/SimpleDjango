# SimpleDjango
Try build simple python web application with Django.

## Project Note
Install Python 3 and Create a Virtual Environment. Under root directory, run below commands.
```
python3 -m venv simpledjangoenv
. simpledjangoenv/bin/activate // go into venv
Scripts\activate // for windows usage
deactivate // exit venv
```
Use Visual Studio to open project. Under venv. 
```
pip install django
django-admin.py startproject firstdjango  //initial a new project
cd firstdjango
python manage.py runserver  // run server
python manage.py startapp scrumboard
```

### Steps
1. add 'scrumboard' into `INSTALLED_APPS` under `settings.py`.

2. Update `models.py`, add class `LIST` and `Card` which are inherit from `models.Model`.
```
Django Model Classes
Inherit from django.db.models.Model
Model classes are mapped to database tables, instances to rows Fields are mapped to columns
```
```
python manage.py makemigrations
```
Scan the code and decide the changes. Add the code to make `LIST` and `Card`  to database.
```
python manage.py migrate
```
While add field without a default. Can pick option `1` and type `None`

Can use `http://inloop.github.io/sqlite-viewer/` to open `db.sqlite3`.

3. *Admin Interface*. In `admin.py`, register for the `LIST` and `Card` models.
```
python manage.py createsuperuser // create user: root/1234asdf
http://localhost:8000/admin  // login on UI
```
Then we can create rows for `LIST` and `Card` on UI

4. *REST*
```
pip install djangorestframework
```

## Prerequisites
HTML Basic (Angular), JavaScript Basics, Python Basics, Web/HTTP(optional)

## Django
```
Web Development
Python 
Build Quickly, Run Fast 
Batteries Included
```
```
Components: MTV
- Model
- Template 
- View
Model represents data 
Python objects, Stored in database
Template generates HTML
View executes logic 
View may call Model and/or Template
```

## Angular
```
JavaScript Web Dev
Rich Internet Applications
Client-Side MVC
```
```
MVC Architecture
- Model
- View
- Controller
Model represents data
JavaScript objects, Stored using REST
View: HTML/DOM
Controller executes logic
May use REST for data operations Two-way binding
```