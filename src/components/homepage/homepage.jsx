import React, { Component } from 'react';
import CardList from '../../components/card-list/card-list.component';
import {Header} from '../header/header.component';
import { connect } from 'react-redux';
import { toggleCategoryHidden } from '../../redux/categories/categories.actions';
import { toggleFeatureHidden } from '../../redux/categories/categories.actions';
import { toggleBrandHidden } from '../../redux/categories/categories.actions';
import { toggleItemHidden } from '../../redux/categories/categories.actions';


import '../../../src/App.css';

class HomePage extends Component {
  constructor({ toggleCategoryHidden,toggleFeatureHidden,toggleBrandHidden,toggleItemHidden }) {
    super({ toggleCategoryHidden,toggleFeatureHidden,toggleBrandHidden,toggleItemHidden });

    this.state = {
      items: [],
      brands: [],
      features: [],
      categories: [],
      searchField: '',
      catchecked: false,
      featchecked: false,
      brandchecked: false,
      itemchecked: false
    };
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

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
  
  handleItemCheckboxChange = event => {
    this.setState({itemchecked: event.target.checked,
      catchecked: false,
      featchecked: false,
      brandchecked: false})
    console.log(this.state.itemchecked);
  };

  handleCatCheckboxChange = event => {
    this.setState({catchecked: event.target.checked,
      featchecked: false,
      brandchecked: false,
      itemchecked: false})
    console.log(this.state.catchecked);
  };

  handleFeatCheckboxChange = event => {
    this.setState({featchecked: event.target.checked,
      catchecked: false,
      brandchecked: false,
      itemchecked: false})
    console.log(this.state.featchecked);
  };

  handleBrandCheckboxChange = event => {
    this.setState({brandchecked: event.target.checked,
      catchecked: false,
      featchecked: false,
      itemchecked: false})
    console.log(this.state.brandchecked);
  }
    

  render() {
    const { items, categories, features, brands, searchField } = this.state;

    const allItems = items.concat(categories,features,brands);
    console.log(allItems)

    const allFilter = allItems.filter(each => 
      each.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const filteredCategories = categories.filter(category =>
      category.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const filteredFeatures = features.filter(feature =>
      feature.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const filteredBrands = brands.filter(brand =>
      brand.name.toLowerCase().includes(searchField.toLowerCase())
    );


    return (
      <div className='App'>
        <div className="grid-container">
          <div className='item1'>
            <Header onSearchChange={this.onSearchChange}/>
          </div>
          <div className="item2">
            <h4>FILTERS</h4>
            <hr></hr>
            <input type='checkbox' checked={this.state.itemchecked} onClick={this.props.toggleItemHidden} onChange={this.handleItemCheckboxChange}/>
            <label>Products</label><br></br>
            <input type='checkbox' checked={this.state.catchecked} onClick={this.props.toggleCategoryHidden} onChange={this.handleCatCheckboxChange}/>
            <label>Category</label><br></br>
            <input type='checkbox' checked={this.state.featchecked} onClick={this.props.toggleFeatureHidden} onChange={this.handleFeatCheckboxChange}/>
            <label>Feature</label><br></br>
            <input type='checkbox' checked={this.state.brandchecked} onClick={this.props.toggleBrandHidden} onChange={this.handleBrandCheckboxChange}/>
            <label>Brands</label><br></br>
          </div>
          <div className="item3">
            <CardList items={filteredItems} categories={filteredCategories} features={filteredFeatures} brands={filteredBrands} allitems={allFilter}/>
          </div>
        </div>
      </div>
    );
  }
};


const mapDispatchToProps = dispatch => ({
  toggleCategoryHidden: () => dispatch(toggleCategoryHidden()),
  toggleFeatureHidden: () => dispatch(toggleFeatureHidden()),
  toggleBrandHidden: () => dispatch(toggleBrandHidden()),
  toggleItemHidden: () => dispatch(toggleItemHidden())
})
export default connect(null, mapDispatchToProps)(HomePage);
