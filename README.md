# improv_tech
Version 0.0.1 of an application for live improv theater suggestions, and musical accompaniment

## Static client application
React app bootstrapped with https://github.com/facebook/create-react-app
To run development server: in react-app directory, run "npm run start"
To create build for deployment: in react-app directory, "npm run build"

## Server
Server.js runs both a small MEAN web service (i.e. Lines from a Hat), which requires MongoDB to be running and a db and collection to be created on the host. Real time audience/actor communication (i.e. New Choice) is run using WebSockets on port 2222, which the client requests. To run, do "node server.js" after installing dependencies and firing up mongod/creating database
