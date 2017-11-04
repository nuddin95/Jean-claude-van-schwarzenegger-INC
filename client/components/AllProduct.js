import React, { Component } from 'react';
import { connect } from 'react-redux'

import store from '../store'
import { fetchProducts } from '../store/product'
import { fetchOrder } from '../store/order'
import { Link} from 'react-router-dom'


class AllProduct extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const productsThunk = fetchProducts()
    store.dispatch(productsThunk)
    const orderThunk = fetchOrder(1) // hard coding an orderID
    store.dispatch(orderThunk)
  }


  render() {
    console.log(this.props, 'the props')

    return (
      <div>
        <h1>All Product List!!!!!!</h1>
        <Link to="/review">Review</Link>
        <hr />
        {
          this.props.product.map(product => {
            return (
             <div key={product.name}>
               <h1>{product.name}</h1>
               <img src={product.photos} />
               <Link to="/single-product">View </Link> |
               <Link to="/cart"> Add to Cart </Link>  |
              </div>
          )
          })

        }

      </div>
    )
  }
}


// CONTAINER

const mapStateToProps = (state) => {
  return {
    product: state.product,
    order: state.order
  }
}

// call connect function from react-redux, pass it mapState, and invoke with the presentational component (this component itself)
export default connect(mapStateToProps)(AllProduct)
// don't need map dispatch yet because no methods being called

//PROP TYPES
