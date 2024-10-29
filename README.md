# Getting Started

Github pages https://krlrmlv.github.io/art-practice-react

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To start your development, you can run this command:

```bash
yarn && yarn start
```

## Deployment

A few Steps to use github actions: 

Create custom workflow [build.yml](.github/workflows/build.yml)

Write homepage in your [package.json](/package.json)

Don't use the [browserRouter](https://reactrouter.com/en/main/routers/create-browser-router), use [hashRouter](https://reactrouter.com/en/main/routers/create-hash-router) instead ( it's atual only for useing react-router )

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
