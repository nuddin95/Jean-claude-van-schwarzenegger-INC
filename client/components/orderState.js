import React, { Component } from 'react';
import { connect } from 'react-redux'

import store from '../store'
import { fetchProducts } from '../store/product'
import { fetchOrder } from '../store/order'


class OrderState extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const productsThunk = fetchProducts()
    store.dispatch(productsThunk)
    const orderThunk = fetchOrder(1) // hard coding an orderID
    store.dispatch(orderThunk)
  }


  render() {
    return (
      <div>
        <h3>customer order</h3>
      </div>
    )
  }
}



// CONTAINER

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    order: state.order
  }
}

// call connect function from react-redux, pass it mapState, and invoke with the presentational component (this component itself)
export default connect(mapStateToProps)(OrderState)
// don't need map dispatch yet because no methods being called

//PROP TYPES
