# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Runs linting

### `yarn lint --fix`

Runs and fixes the linting errors and warnings

### `How to use the app`

When you open it in your browser, a request will provide the posts list. They are listed 10 per page. You can navigate through the pages using the Next and Prev buttons, or simply clicking on the page indexes.
On the right side of a post, by clicking the down arrow a new request will provide the comments for that post. Comments can be hidden back by clicking again on the arrow.
On the top of the page there is a Search Bar which allows us to filter the posts by title.

### `Further improvements`

Use the loading state for the requests and render it into the page while the request is being processed.
Use Typescript instead of Javascript to avoid potential errors.
Integrate Storybook to test the components in isolation.
Implement integration tests.
Provide a prettier design.
Provide a better mobile layout version.
