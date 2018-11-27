import React, { Component } from 'react'

export default  class Widget extends Component {

   constructor(props){
      super(props);
      this.state = {};
   }


  render() {
     console.log(this.props)
    return (
      <div>
        <div className="widget">
                  <div className="widget__inner">
                     <span className="icon">
                     <i className="wi wi-owm-night-802"></i>
                     </span>
                     <p className="status">scattered clouds</p>
                  </div>
                  <div className="widget__inner">
                     <p className="temp">30°</p>
                     <p className="temp-range">23..30°</p>
                  </div>
                  <div className="widget__inner">
                     <p title="humidity">
                        <span className="icon">
                        <i className="wi wi-raindrop"></i>
                        </span>93
                        <span>%</span>
                     </p>
                     <p title="wind and speed direction">
                        <span className="icon">
                        <i className="wi wi-direction-up-right"></i>
                        </span>4
                        <span> m/s</span>
                     </p>
                     <p title="pressure">
                        <span className="icon">
                        <i className="wi wi-thermometer"></i>
                        </span>769
                        <span> mmHg</span>
                     </p>
                     <p title="cloudiness">
                        <span className="icon">
                        <i className="wi wi-cloud"></i>
                        </span>32
                        <span>%</span>
                     </p>
                  </div>
               </div>
      </div>
    )
  }
}



