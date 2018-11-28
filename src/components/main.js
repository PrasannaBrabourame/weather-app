import React, { Component } from 'react'
import SimpleSlider from './slider'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            _state:'Chennai',
            _country:'IN'
        }
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(){

    }
    render() {
      return (
        <div className="main-section">
        <div className="loan">
        <h2 className='text-center'>Weather Application</h2>
              <div className='text-center'>Prasanna Brabourame</div>
              <div className="clear"></div>
              <div className="line"></div>
              <div className="form-left app-col-12 form_operation" >
                <div className="form-row">
                  <div className="app-col-6 form-left">
                      <label>State</label>
                      <input type="text" required name="State" onChange={(e)=>this.handleChangeText(e)} value={this.state._state} disabled/>
                  </div>
                  <div className="app-col-6">
                  <label>Country</label>
                      <input type="text" required name="amount" onChange={(e)=>this.handleChangeText(e)} value={this.state._country} disabled/>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
              <div className="form-row text-center">
                  <button className="submit-btn" onClick={(e)=>this.handleButton(e)} disabled>
                      Get Weather
                  </button>
              </div>
              <div className="line"></div>
              <SimpleSlider/>
        </div>
        </div>
    )
  }
}


