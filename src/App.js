import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import PostItemScreen from './screens/PostItemScreen';
import ProductsDetailsScreen from './screens/ProductsDetailsScreen';

function App() {


  return (
    <Router>
      <Navbar />

      <div className="mainContent">
        <Switch>
          <Route exact path="/item/:id" component={ProductsDetailsScreen} />
          <Route exact path="/signin">
            <SignInScreen />
          </Route>
          <Route exact path="/signup">
            <SignUpScreen />
          </Route>
          <Route exact path="/postitem">
            <PostItemScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
