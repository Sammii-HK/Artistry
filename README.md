# 🖼 Artistry

## Python & React App

---------

[Live Site](https://artistry-api-app.herokuapp.com/#/): https://artistry-api-app.herokuapp.com/#/


### Timeframe

7 days


## Technologies Used

* React

* Webpack

* Python

* Pony

* Marshmallow

* Ajax

* JavaScript (ES6)

* HTML5

* Bulma (CSS framework)

* SCSS

* GitHub

* Rijksmuseum API



## Description

<img width="1559" alt="Screenshot 2019-07-03 at 23 41 36" src="https://user-images.githubusercontent.com/40900195/60629156-84f4f700-9dec-11e9-96e9-d19984492111.png">

*Link to Live site: https://artistry-api-app.herokuapp.com/#/*

### Introduction

The app allows users to search through the Rijksmuseum API and view individual items of artwork, users can then save items as a favourite artwork, which can be viewed on their profile page.

### The Brief

The brief was to create a full-stack app using React and Python, which worked with a database we had created.

### Overview

My initial idea came from there being no obvious central place for artworks from many museums and in time I would incorporate other Museums data to create a larger database to search from.

I wanted to create a minimalist experience which demonstrated the artwork as the main focus of the page. The Magnifier package allows users to interact with the images and takes advantage of the quality of photographs available from the API.

I achieved this with many subtle uses of user interaction on hover states and utalising packagaes available with npm, so users can delve deeper into the artworks.

<img width="1440" alt="Screenshot 2019-06-04 23 57 13" src="https://user-images.githubusercontent.com/40900195/60984774-296ac200-a334-11e9-9a78-864cb3db8748.png">



## Process

The brief was to build a full-stack application with a React front-end and SQL database. The application had to include data schema and a RESTful api framework to be built with Python. Because of this my first concern was my database and orangising the one:many relationship I had in mind for users to add favorites art works.

<img width="1680" alt="Screenshot 2019-07-03 at 23 41 22" src="https://user-images.githubusercontent.com/40900195/60629130-70186380-9dec-11e9-9572-f98f13c8e2ba.png">

I chose to use the Rijksmuseum API as it was populated with lots of quality data, but most importantly it included high quality images of most of its artworks.

The application is deployed via Git on Heroku and can be found here: [Artistry](https://artistry-api-app.herokuapp.com/#/)

### Challenges

To populate my database, I needed to obtain the appropriate information from the Rijksmuseum API and save it for the Schema set on my database.

Another challenge was the favorite button, and having a GET and POST request to the favourites, it required saving the user favorites into localStorage so it they are available throughout the website, and clear on log out.

It was also the first search feature I had implemented on a website which calls to an Rijksmuseum API, I used the requests package to handle the requests to the Rijksmuseum API.

```python
# * rijksmuseum.py * #
#route which connects front end to the back end
@router.route('/rijksmuseum/collection')
@db_session
def search():
    # this gets the query applied to the url route request
    query = request.args.get('query')
    api_key = os.getenv('RIJKS_API_KEY')
    url = 'https://www.rijksmuseum.nl/api/en/collection'
    # this uses the requests package to save the parameters
    params = {
        'q': query,
        'ps': '48',
        'key': api_key
    }
    # then apply these paramters onto the url as a request
    req = requests.get(url, params=params)

    print('url', url)

    return Response(
        mimetype='application/json',
        response=req.text,
        status=req.status_code
    )
```

<img width="1680" alt="Screenshot 2019-07-03 at 23 41 05" src="https://user-images.githubusercontent.com/40900195/60629164-8aead800-9dec-11e9-80aa-d326dfda7787.png">

### Achievements

I found making a SQL database in Python, with relationships, quite a challenge so I feel that as my first one that in itself is an achievement and certainly has given me a strong set of skills to build on in the future.

I look forward to applying this knowledge in new projects and advancing it further.

## Future features

Due to the time scale of 7 days, I needed to scale down my ambitions of this app but going forward I would like the web application to incorporate art from around the globe, so that users can search through more results and interact with a greater number of artworks.

I also want to add a feature which shows exactly where in the museum the artwork can be found, and then save these locations on a map, available through the profile page.

Going forward it would be good to make the database more complex, and include features where users can recommend pieces of art to other users or share the item on social networking sites.





