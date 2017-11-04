import axios from 'axios'
const chalk = require('chalk')

//ACTION TYPES
const GET_ORDER = 'GET_ORDER'

//ACTION CREATORS
const getOrder = (order) => ({ type: GET_ORDER, order: order })


//THUNK CREATORS

export function fetchOrder(orderId) {

  return function thunk(dispatch) {
    magenta(orderId)
    return axios.get(`api/orders/${orderId}`)
      .then(res => res.data)
      .then(order => {
        dispatch(getOrder(order))
      })
  }

}


// REDUCER

export default function (state = {}, action) {
  switch (action.type) {

    case GET_ORDER:
      return action.order

    default:
      return state
  }
}


function magenta(str) {
  console.log(chalk.magenta(str))
}
