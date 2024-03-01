
# url shortner project 
This project is a fundamental Node.js application created exclusively for educational purposes. Its focus is on facilitating learning by implementing a basic URL shortener functionality, allowing users to generate shortened URLs for their applications


## clone the Project
````bash
git clone https://github.com/sujan321-oss/URL-Shortener.git

````

## run the server
````bash
nodemon index

````

or 

````bash
node index

````

## to get url_shortner
do the post request in format {url:https://whatsappchatanalyzer.pythonanywhere.com/}
````bash
http://localhost:8001/urlshort

````

### to count total clicks or visit on url
take the shortner id from the end of the url and  do a get request with that id like this :
````bash
http://localhost:8001/urlshort/clickcounts/--6F9XAr8

````






