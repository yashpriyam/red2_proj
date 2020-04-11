import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProdInfo from './components/prod-info/prod-info.component';
import HomePage from './components/homepage/homepage';

import './App.css';
// import { Header } from './components/header/header.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      brands: [],
      features: [],
      categories: []
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/banshilaldangi/ecommerce/products')
      .then(response => response.json())
      .then(users => {
        this.setState({ items: users })
      });
    fetch('https://my-json-server.typicode.com/banshilaldangi/ecommerce/brands')
      .then(response => response.json())
      .then(users2 => {
        this.setState({ brands: users2})
      });
    fetch('https://my-json-server.typicode.com/banshilaldangi/ecommerce/features')
      .then(response => response.json())
      .then(users3 => {
        this.setState({ features: users3})
      });
    fetch('https://my-json-server.typicode.com/banshilaldangi/ecommerce/categories')
      .then(response => response.json())
      .then(users4 => {
        this.setState({categories: users4})
    });
  }
    

  render() {
    const { items, categories, features, brands } = this.state;

    const allItems = items.concat(categories,features,brands);
    console.log(allItems);

    return (
      <div className='grid-container'>
        <Switch>
            <Route exact path='/' component={ HomePage }></Route>
            {/* <Route path='/' component={ Header } ></Route> */}
          {allItems.map(item => 
            <Route exact path={`/${item.name}`} component={ ProdInfo }></Route>
          )}
        </Switch> 
      </div>
    );
  }
}

export default App;
