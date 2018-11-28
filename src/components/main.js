import React, { Component } from 'react'
import SimpleSlider from './slider'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            _state:'Chennai',
            _country:'IN',
            showWeather:false
        }
        this.handleButton = this.handleButton.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }


    handleChangeText(e){
        this.setState({showWeather:false});
        if(e.target.name === 'State'){
            this.setState({_state:e.target.value})
        }else{
            this.setState({_country:e.target.value})
        }
    }

    handleButton(){
        this.setState({showWeather:true});
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
                      <input type="text" name="State" onChange={(e)=>this.handleChangeText(e)} value={this.state._state} />
                  </div>
                  <div className="app-col-6">
                  <label>Country</label>
                      <input type="text" name="Country" onChange={(e)=>this.handleChangeText(e)} value={this.state._country} />
                  </div>
                </div>
                <div className="clear"></div>
              </div>
              <div className="form-row text-center">
                  <button className="submit-btn" onClick={(e)=>this.handleButton(e)} >
                      Get Weather
                  </button>
              </div>
              <div className="line"></div>
              {this.state.showWeather?<SimpleSlider stateValue={this.state}/>:''}
        </div>
        </div>
    )
  }
}


