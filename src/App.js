import React from 'react';
import './App.css';
import Home from "./components/pages/Home";
import EditProduct from "./components/pages/EditProduct";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/layout/Navbar";
import { povider, Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/edit-product/:id" component={EditProduct} />
         
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
