# Microfrontend

Example of a Microfrontend application.

- `app1` containers a Header component
- `app2` containers a Footer component
- `container` brings these 2 components into 1 application with a Dashboard page

The 3 applications are seperate applications that can be run independently and exist in their own repository.

## Running the applications

For ease and for demo purposes, the applications can be run together using `lerna` with `npm start` in the root folder. But in the real world they will exist in their own repository.

You can also run the applications independently by navigating to their folder and `npm start`.
