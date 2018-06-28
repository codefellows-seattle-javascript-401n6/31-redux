# Steps to create react app

1. `npm init -y`

1. install dependencies
```
npm i webpack webpack-cli babel-core babel-loader babel-preset-env babel-preset-react react react-dom react-router-dom html-webpack-plugin webpack-dev-server node-sass style-loader css-loader sass-loader
``` 

1. configure `.babelrc` file
```
{
  "presets": ["env", "react"]
}
```

1. configure `webpack.config.js` file
```
const path = require('path');

const config = {
  mode: 'development', // production
  devtool: 'source-map',
  entry: './src/main.js', // name of java script file
  output: {
    path: path.resolve(__dirname, './dist'), // puts dist in current working directory
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.s?css$/, loader: [
        'style-loader', 'css-loader'  // The order of these matters!
      ]}
    ]
  }
};

module.exports = config;
```

1. create `src` folder.

1. create minimal `index.html` file in `root` folder of project.
```
<div id="root"></div>
<script src="./dist/bundle.js"></script>
```

1. create minimal `main.js` react file in `src` folder.
```
import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css'

class App extends React.Component { // MyCoolApp is the name of the app
  constructor(props){
    super(props);
  }

  render() { // JSX
    return <div>
      <h1>Hello World!</h1>
      </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);  // Class and render need to be the same.
```

1. in `src` create `style` folder for CSS and SCSS elements.
create `main.css` file.

1. in `package.json` insert this into scripts to enable live editing.
```
    "build": "webpack",
    "watch": "webpack --watch",
    "hot": "webpack-dev-server --inline --hot"
```

# From lab folder run webpack
npx webpack-dev-server --inline --hot --history-api-fallback --open


# Redux
https://redux.js.org/
Single Source of Truth:
- A single state tree makes things easier to debug.
- Enables oyou to persist app state in developemnt.
- Makes undo/redo state management timeline possible.
State is read-only:
- All changes are centralized and happen one bhy one in a strict order.
- No subtle race conditions to watch out for.
- Actions can be logged, serialized, stored, and later replayed for debugging or testing purposes.
Changes are made with pure functions:
- Return new state objects, instead of mutating the previous state.

Actions, payloads of info sent from application to the store.
Reduces, specify how app state changes in response to actions.
Store, holds all app state.

Actions:
{
  type: TOGGLE_TODO,
  index: 5
}

