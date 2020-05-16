import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/hompage.component";
import {Switch, Route} from "react-router-dom";
import ShopPage from "./pages/shopPage/shop.component";
import Header from "./components/header/header.component"
import "./App.css"
function App() {
  return (
    <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
