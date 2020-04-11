import React from 'react';
import '../card/card.styles.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../prod-info/prod-info.styles.css';


class ProdInfo extends React.Component {
  constructor(props){
    super(props);
  }

  // componentWillMount(){
  //   const item = async () => {
  //     const itemlist = await this.props.items;
  //     const eachitem = await itemlist.filter(item => item ? `/${item.name}`===this.props.match.url : null)
  //     return eachitem
  //   }

  //   item().then(result => this.setState({myitem: result}))
  // }
  render(){
    const item = this.props.items.filter(item => {
      if(`/${item.name}`===this.props.match.url){
          return item;
      }
    });
    return (
      <div className='container'>
        <div className='item-prod'>
          <h1> {item[0].name} </h1>
          <p>{item[0].description}</p>
          <h6>MRP: Rs.{item[0].price}</h6>
          <h6>OUR PRICE: Rs.{item[0].price}</h6>
        </div>
        <div className='item2-prod'>
          <img src='' alt='img'></img>
        </div>
      </div>
    )
    
  }
}

const mapStateToProps = ({ itemlist: {items}}) => ({
  items
});


export default connect(mapStateToProps)(withRouter(ProdInfo));