# React JS

## Install Node and React JS
*Install Node or make sure it is latest version

display current version of node

```bash
npm - v
```

update node to latest version

```bash
sudo npm update npm -g
```

create application with typescript. note that application name can not contain capital letters

```bash
npx create-react-app demo-login --typescript
```

Once completed, the routine will present the following confirmation and a helpful starter guide on the immediate options

```bash
Initialized a git repository.

Success! Created demo-login at /Users/davidberry/Documents/ReactJS/Tutorials/demo-login
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd demo-login
  npm start

Happy hacking!
```

## Install Typescript Types

```bash
npm install @types/react-router-dom --save-dev
```

## Install Routing

```bash
npm install react-router --save
npm install react-router-dom --save
```

## Style Sheets

The auto generated project uses CSS by default, we will now include SASS by performing the following

```bash
npm install node-sass --save
```

sass files can be referenced in the same way as css files, the build pipeline will automatically compile the sass.

## Install Material Design Styles

add the following to index.html

```html
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

run the following node commands

```bash
npm install @material-ui/core
npm install @material-ui/icons
```

## Define Components

TO DO

## Define Pages

TO DO

## Define Routes

* Create Routes.tsx
* Include in index.tsx