import React from 'react';
import { connect } from 'react-redux';

import Card from '../card/card.component';
import { allTheItems } from '../../redux/items/items.actions';
// import { CatCard } from '../cat-card/cat-card.component';
// import { FeatCard } from '../feat-card/feat-card.component';
// import { BrandCard } from '../brand-card/brand-card.component';
// import { ItemCard } from '../item-card/item-card.component';

import './card-list.styles.css';

class CardList extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  componentDidUpdate(){
    const { allitems, allTheItems } = this.props;
    allTheItems(allitems);
  }


  render() {
    const { allitems,itemhidden,cathidden,feathidden,brandhidden } = this.props;
    switch(true){
      case itemhidden && cathidden && feathidden && brandhidden===true:
        return (
          <div className='card-list'>
            {allitems.map(item => (
              <Card key={item.name} item={item}/>
            ))}
          </div>
        );
      case !itemhidden:
        return (
          <div className='card-list'>
            {this.props.items.map(prod => (
              <Card key={prod.name} item={prod}/>
            ))}
          </div>
        );
      case !cathidden:
        return (
          <div className='card-list'>
            {this.props.categories.map(cat => (
              <Card key={cat.name} item={cat}/>
            ))}
          </div>
        );
      case !feathidden:
        return (
          <div className='card-list'>
            {this.props.features.map(feat => (
              <Card key={feat.name} item={feat}/>
            ))}
          </div>
        );
      case !brandhidden:
        return (
          <div className='card-list'>
            {this.props.brands.map(brand => (
              <Card key={brand.name} item={brand}/>
            ))}
          </div>
        );
      default:
        return null
    }
    // if (itemhidden && cathidden && feathidden && brandhidden) {
    //   return (
    //     <div className='card-list'>
    //       {allitems.map(item => (
    //         <Card key={item.name} item={item}/>
    //       ))}
    //     </div>
    //   );
    // } else if(!itemhidden){
    //   return (
    //     <div className='card-list'>
    //       {this.props.items.map(prod => (
    //         <ItemCard key={prod.name} prod={prod}/>
    //       ))}
    //     </div>
    //   )
    // } else if(!cathidden){
    //   return (
    //     <div className='card-list'>
    //       {this.props.categories.map(cat => (
    //         <CatCard key={cat.name} cat={cat}/>
    //       ))}
    //     </div>
    //   );
    // } else if(!feathidden){
    //   return (
    //     <div className='card-list'>
    //       {this.props.features.map(feat => (
    //         <FeatCard key={feat.name} feat={feat}/>
    //       ))}
    //     </div>
    //   );
    // } else if(!brandhidden){
    //   return (
    //     <div className='card-list'>
    //       {this.props.brands.map(brand => (
    //         <BrandCard key={brand.name} brand={brand}/>
    //       ))}
    //     </div>
    //   );
    // }
  }
}

const mapStateToprops = ({category : { itemhidden,cathidden,brandhidden,feathidden }}) => ({
  cathidden,
  feathidden,
  brandhidden,
  itemhidden
});

const mapDispatchToProps = dispatch => ({
  allTheItems: allitems => dispatch(allTheItems(allitems))
})

export default connect(mapStateToprops, mapDispatchToProps)(CardList);