# Microfrontend

Example of a Microfrontend application.

- `header` containers a Header
- `app2` containers a Footer
- `login` contains a Login form which consumes the Header and Footer from `header` and `app2`
- `container` brings these 3 applications into 1, on a Dashboard page

## Running the applications

For ease and for demo purposes, the applications can be run together using `lerna` with `npm start` in the root folder. But in the real world they will exist in their own repository.

You can also run the applications independently by navigating to their folder and `npm start`.
