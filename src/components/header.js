import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="header">
        <a href="#test">
            <img src="https://logos.textgiraffe.com/logos/logo-name/Prasanna-designstyle-kiddo-m.png" alt="Logo" className="logo"/>
        </a>
        <div className="headerRight">
            <div></div>
            <button type="button" className="btn">
                    <span>Prasanna Brabourame</span>
            </button>
        </div>
        
    </div>
    )
  }
}


