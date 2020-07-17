import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Auth from "../hoc/auth";
import './App.css';
import Header from './Header';
//import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import UploadProductPage from './views/UploadProductPage/UploadProductPage';
import LandingPage from './views/LandingPage';
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';


const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/user/dashboard' component={UserDashboard} />
        <Route exact path='/admin/dashboard' component={AdminDashboard} />
        <Route exact path='/product/upload' component={UploadProductPage} />
        <Route exact path='/product/:productId' component={DetailProductPage} />
        <Route exact path='/user/cart' component={CartPage} />
        
      </Switch>
    </main>
  </BrowserRouter>
  );


export default App;
