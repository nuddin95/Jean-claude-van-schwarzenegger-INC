import React, { Component } from 'react';
import { connect } from 'react-redux'

import store from '../store'
import { addProductToDb } from '../store/order'
import { Link} from 'react-router-dom'


class TestCart extends Component {
  constructor(props) {
    super(props)
  }


    componentDidMount() {

      const addThunk = addProductToDb(1, 1) // hard coding an orderID
      store.dispatch(addThunk)

  }

  handleClick(){

  }


  render() {

    return (
      <div>
              <hi>Hello!!!!</hi>
      </div>
    )
  }
}


// CONTAINER

const mapStateToProps = (state) => {
  return {
   // product: state.product,
    order: state.order

  }
}

// call connect function from react-redux, pass it mapState, and invoke with the presentational component (this component itself)
export default connect(mapStateToProps)(TestCart)
// don't need map dispatch yet because no methods being called

//PROP TYPES
