# init proyecto MERN base

#!/bin/bash

nombreProyecto=$1;
bootstrap=$2

mkdir ${nombreProyecto}

cd ${nombreProyecto}

npm init -y

npm i --save mongoose express cors bcrypt jsonwebtoken cookie-parser socket.io

mkdir server

mkdir server/config
mkdir server/controllers
mkdir server/models
mkdir server/routes

touch server.js
touch server/config/mongoose.config.js
touch server/config/mongoose.config.js
touch server/config/mongoose.config.js

npx create-react-app client

mkdir client/src/components

npm i --save @reach/router
npm i -- save axios
npm i -- save socket.io-client

if $bootstrap == true
    npm i --save bootstrap
    npm i --save reactstrap react react-dom
    npm i --save @fortawesome/fontawesome-svg-core
    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/react-fontawesome
fi







