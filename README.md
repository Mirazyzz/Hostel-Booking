# Hostel Booking

Front-End application made with React.JS, HTML/CSS, and MaterialUI for making UI. Contentful API for retrieving data, Google Maps API for showing the exact location of Hostel, Email.JS for sending emails from user and to user.

[Link to the hosted application](https://bist-hostel.netlify.app/)

## Table Contents

* [Getting started](#getting-started)
* [Technologies](#technologies)
* [Features](#features)
* [Screenshots](#screenshots)
* [Learn more](#learn-more)
* [Credits](#credits)

## Getting started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

**_NOTE:_** before setting up the project on your local machine, you should add .env file to the project after you fork the repo. In the _.env_ file you need to have next dev variables:

* REACT_APP_MAPS_API_KEY=_Replace with your API Key from google console_
* REACT_APP_API_SPACE=_Replace with your API space key from Contentful API_
* REACT_APP_ACCESS_TOKEN=_Replace Access token from Contentful API_
* REACT_APP_EMAIL=_Replace with your UserID from Email.JS_
* REACT_APP_PASSWORD=_Access token from Email.JS_

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Technologies

Project is implemented with:
* React.JS: https://reactjs.org/
* MaterialUI: https://material-ui.com/
* HTML/CSS: https://www.w3schools.com/html/default.asp
* Contentful: https://www.contentful.com/developers/docs/
* Netfliy: https://www.netlify.com/
* Email.JS: https://www.emailjs.com/docs/
* Google Maps API: https://developers.google.com/maps/documentation

## Features

* Responsive UI
* Reviewing details of the rooms
* Filtering rooms by different categories (by date of avialability, price, capacity number)
* Sending message to the owner
* Preview the location via Google Maps

## Screenshots

### Home Page
![home](https://user-images.githubusercontent.com/49793609/105846538-97d9a880-5fdc-11eb-9f97-ddb0a68b86f1.png)

### Rooms
![rooms](https://user-images.githubusercontent.com/49793609/105846515-9314f480-5fdc-11eb-9df7-6add60bb9621.png)

### Room details
![details](https://user-images.githubusercontent.com/49793609/105846499-8e504080-5fdc-11eb-9864-416ae68b0610.png)

### Contacts
![contacts](https://user-images.githubusercontent.com/49793609/105846486-8bede680-5fdc-11eb-98e8-c69b12eb6ee1.png)

### About us
![about](https://user-images.githubusercontent.com/49793609/105846553-9f994d00-5fdc-11eb-9a16-59d72ba71994.png)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Credits
This application was [designed](https://github.com/john-smilga/react-beach-resort-project) by [John Smilga](https://github.com/john-smilga) for his YouTube [course](https://www.youtube.com/watch?v=l0JbuMVXaTs&t=2959s). You can find about more about his courses [here](https://www.johnsmilga.com/).
