import React from 'react';
import CategoryList from './CategoryList.jsx';
import CategoryForm from './CategoryForm.jsx';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <h1>Add a new Category</h1>
        <CategoryForm />
        <CategoryList />
      </div>
  }
};

export default App;
