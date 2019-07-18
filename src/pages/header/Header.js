import React, { Component } from 'react';
import { Link } from "react-router-dom";
import routesConfig from '../../routesConfig';
import './Header.css';
import { Route } from "react-router-dom";

class Header extends Component {
  render(){

        return (
        <div id="h-100">
            <div className="Header">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </div>
            {routesConfig.map((value, key) => {
            return <Route
                key={key}
                path={value.path}
                component={value.component}
                exact={value.exact}
            ></Route>
            })}
        </div>

        );
    }
}

export default Header;
