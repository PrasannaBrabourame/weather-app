import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="header">
        <a href="#test">
            <img src="http://www.auxolabs.in/img/logo-small.png" alt="Logo" className="logo"/>
        </a>
        <div className="headerRight">
            <div></div>
            <button type="button" className="btn">
                    <span>Auxo-Labs</span>
            </button>
        </div>
        
    </div>
    )
  }
}


