import React, { Component } from 'react';
import { connect } from 'react-redux'

import store from '../store'
import { fetchProducts } from '../store/product'

class ReduxTest extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const productsThunk = fetchProducts()
    store.dispatch(productsThunk)
    const orderThunk = fetchOrder()
    srotre.dispatch(orderThunk)
  }


  render() {
    return (
      <div>
        <h3>a redux test</h3>
      </div>
    )
  }
}



// CONTAINER

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts
  }
}

// call connect function from react-redux, pass it mapState, and invoke with the presentational component (this component itself)
export default connect(mapStateToProps)(ReduxTest)
// don't need map dispatch yet because no methods being called

//PROP TYPES
