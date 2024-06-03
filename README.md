# URL Shortener website

This website takes a url and shortens it to another link.
( Note that the site has been hosted on vercel, so sometimes the resulting site might not be smaller than the original site. )

## Other Links - 
#### [Link to site](https://url-beta-nine.vercel.app/)
#### [Link to frontend repo of this project](https://github.com/Siddhant-Baranwal/urlFrontend)

## How to use on your laptop - 
Clone this repo and open a terminal in the same folder. Now, in this folder create a .env file and write the following code in it :
```bash
MONGO_URI = "mongodb://localhost:27017"

FRONTEND_URL = "http://localhost:3000"
```

After doing so, go to the terminal and write the following command :
```bash
mongod
```

Then, open another terminal without closing the previous one and write the following command :
```bash
npm i
node .\\server.js
```

The backend will be running after this. 
Then, run the [frontend code](https://github.com/Siddhant-Baranwal/urlFrontend) and your the site will be functional on your local computer.