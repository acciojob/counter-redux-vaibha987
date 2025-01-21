
import React from "react";
import './../styles/App.css';
import store from './Redux/Store'
import { Provider } from 'react-redux'
import Home from './Home'

const App = () => {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  )
}

export default App
