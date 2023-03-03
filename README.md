# Getting Started with User-album

This project shows the gallary of the user

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Folder Structure

src
|-- common  -> contains the common helpers and constant files
|-- Components
|   |-- AlbumPhotos ->  Component to show photos from album
|   |-- BreadCrumbs ->  breadcrumb header component
|   |-- PageNotFound -> if user navigates to random url
|   |-- UserAlbum    -> Component to show the album
|   |-- UserData    -> Component to show user data
|-- routes  
|-- scss