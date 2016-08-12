# tEp's Even Newer Home Page

In order to the improve the reliability, maintainability, and
ease-of-customization of the tEp home page, we're transitioning the site to a simple node app.

Please submit PR's to make changes (**don't**  commit directly to `master`).

## Dev Instructions

## System Requirements

- [npm](https://www.npmjs.com/get-npm)

## Modifying the Site

Be sure to `npm install` in order to pull all the necessary dependencies.

Run `npm watch` to continuously watch the react and sass files and compile them. This is done via [webpack](https://github.com/webpack/webpack).

Run `npm start` from the project directory whenever you want to develop the website. Look at the command's output to see which port the server is running on (default `3000`.)
