import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import { Default } from './components/Default';
import Navbar from './components/Navbar';
import { Details } from './components/Details';
import { Modal } from './components/Modal';

class App extends Component {
  render() {
    return (
      <>
                <Navbar />
                <Switch>
                  <Route exact path = '/' component= {ProductList} />
                  <Route path = '/details' component= {Details} />
                  <Route path = '/cart' component= {Cart} />
                  <Route component= {Default} />
                </Switch>
                <Modal />
      </>
      // <div className="container">
      //   <div className = "row">
      //     <div className = "col-6">column number 1</div>
      //     <div className = "col-6">
      //       <span>
      //         <i className = "fa fa-home"/>
      //       </span>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
