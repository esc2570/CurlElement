## PWA Starter

This application is a react starter application used by DHA developers for developing progressive web applications

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
You can find more information about getting started with Create React App [here](https://facebook.github.io/create-react-app/docs/getting-started),
and available scripts [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).

## Table of Contents

- [Quick Start](#markdown-header-quick-start)
- [New Project Instructions](#markdown-header-new-project-instructions)
- [Release Notes for the pwa-starter V1.4.0](#markdown-header-release-notes)
- [DHA SDK Packages](#markdown-header-dha-sdk-packages)
- [Built With](#markdown-header-built-with)
- [Available Scripts](#markdown-header-available-scripts) 
    - [npm start](#markdown-header-npm-start) 
    - [npm test](#markdown-header-npm-test) 
    - [npm run build](#markdown-header-npm-run-build) 
    - [npm run eject](#markdown-header-npm-run-eject)
- [Testing](#markdown-header-testing)
- [Create React App Template Specifics](#markdown-header-create-react-app-template-specifics)
    - [PWA Starter Updates](#markdown-header-pwa-starter-updates) 
- [License](#markdown-header-license)

## Quick Start

For starting new projects use the commands below and follow [New Project Instructions](#markdown-header-new-project-instructions)

- npx create-react-app app-name-here --template pwa-starter
- cd app-name-here
- npm start

For updating and maintaining PWA Starter

- [PWA Starter Updates](#markdown-header-pwa-starter-updates) 

## Authentication
- Authentication
- If the app needs authentication, uncomment all lines of code for account setup and login in file below
   - File path pages/Routes/RequireAuth.tsx
- User Timeout
	- Uncomment lines above to have user timeout enabled and redirected to login after 1hr.
	- File path pages/providers/AuthProvider.tsx
       

## New Project Instructions

- npx create-react-app app-name-here --template pwa-starter

- .gitignore
    - Uncomment build folder if its not needed in the repository for CI/CD or hosting.
- package.json
    - Add or replace the values for: name, version, author, description, repository.url, and bug.url.
- Copyright Headers
    - Add copyright headers to every new file.
    - Add the file name on the first line.
    - Add the file description on the second line
    - Replace firstName, lastName, and date for the line "Created by firstName lastName on date".
        - Search and replace all instances of "pwa-starter" with your application name in all project files.

## Note for emotion styling

In order for the css prop to work properly you need to make sure to add the following to the top of your JSX files.

`/** @jsxImportSource @emotion/react */`

## Release Notes for the pwa-starter V2.1.0

- More detailed release notes in CHANGELOG.md
- Migrated from MUIv4 to MUIv5
  - Started using emotion as our styling engine
- Migrated to React 17
- Migrated to React-router v6
- Migrated from HashRouter to BrowserRouter
- Authentication
- Stores user profile, encrypted, as a dexie database in a table
- New screens added
	- Account Setup
	- Login
	- Pin Reset
	- About

## DHA SDK Packages

The application uses the following DHA SDK packages:

- dha-rating

## Built With

- [Create React App](https://github.com/facebook/create-react-app).
- [React](https://reactjs.org)
- [Material UI](https://material-ui.com)
- [Typescript](https://www.typescriptlang.org)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:ci`

Launches the test runner in non-interactive watch mode. This script lets the ci and build complete without any other interactions when running.<br />

### `npm run test:coverage`

Launches the test runner in the interactive watch mode. This will generate the test coverage report in the coverage folder and viewed in the console.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run format`

Runs Prettier to format project files. Prettier doesn't have a parser for every file extension. If you get the error "No parser could be inferred for file: file.png", add the file or extension to .prettierignore.

### `npm run lint`

Runs TSLint to check for linting errors in project files.

## Testing

- Tests can be ran with the `npm test` command
- Tests are ran using Jest with enzyme - More information about getting started with jest can be found [here](https://jestjs.io/docs/en/getting-started.html)
- Example Render Test

```javascript
it('renders without crashing', () => {
    shallow(<Home/>);
});`
```

## Create React App Template Specifics

The PWA Starter CRA Template is published to NPM here: https://www.npmjs.com/package/cra-template-pwa-starter

### Starting a New Project Utilizing the Template

To get started use the [New Project Instructions](#markdown-header-new-project-instructions), replacing the name of your app in the command. The npx command will download and install the project for you, getting it ready for development. Having yarn installed can potentially cause problems during the install process.

### PWA Starter Updates

Publishing the PWA Starter to NPM as a Create React App Template is handled automatically by the pipeline, which runs during pushes to the Master branch. When ready to merge to Master ensure the version number is updated in the package.json or the pipeline will fail during the publish step. No action is required on the part of developers to publish the PWA Starter Template to NPM.

- git clone git@bitbucket.org:wmtp/pwa-starter.git
- cd pwa-starter
- npm i
- npm start

### Pipeline and Deployment Explanation

The following summarizes the steps the pipeline takes to publish and reorganize the file structure into the format the template requires after a push to the Master branch. The pipeline itself only takes a few minutes to run and after a few more minutes the changes should be live on NPM and ready for download. The pipeline progress, status, and error messages can be found on the pipelines tab here: https://bitbucket.org/wmtp/pwa-starter/addon/pipelines/home

- Set shopt environment variables so following commands function properly
- Gitignore is renamed to remove “.” as a templating requirement
- All except for a few files are moved to template folder
- Moves all hidden files to template folder
- Edits project name in package.json to template name format
- Publish to npm

### Maintenance of Template

Official documentation for CRA Template: https://create-react-app.dev/docs/custom-templates/

The file structure below is required for the template to be created. The pipeline on the master branch will restructure the files and folders to the format they need to be in before publishing them to npm, these changes are all temporary and aren't saved.

- README.md: Contents for npm page
- template.json: Gets added to package.json for those using template to install
- package.json: Contains versioning and info for CRA template on npm, modified copy by pipeline from package.json for PWA-Starter
    - Name must start with “cra-template-”
- Template Folder: Contains all of the content to be downloaded when someone uses the CRA template
    - The gitignore file must have the period removed and it is renamed automatically during the Create-React-App template install command process

## License

This project is licensed under the MIT License.
