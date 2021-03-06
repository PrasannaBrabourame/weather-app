import React from "react";
import Slider from "react-slick";
import axios from 'axios';

export default class SimpleSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = {API:[],Hourly:[],error:false};
        this.GenerateBox = this.GenerateBox.bind(this);
    }

    GenerateBox(data, index){
      return (
         <div key={index}>
        <div className="widget">
                  <div className="widget__inner">
                     <span className="icon">
                     <i className={`wi wi-owm-night-${data.weather[0].id}`}></i>
                     </span>
                     <p className="status">{data.weather[0].description}</p>
                  </div>
                  <div className="widget__inner">
                     <p className="temp">{data.temp.day}°</p>
                     <p className="temp-range">{data.temp.min}-{data.temp.max}°</p>
                  </div>
                  <div className="widget__inner">
                     <p title="humidity">
                        <span className="icon">
                        <i className="wi wi-raindrop"></i>
                        </span>{data.humidity}
                        <span>%</span>
                     </p>
                     <p title="wind and speed direction">
                        <span className="icon">
                        <i className="wi wi-direction-up-right"></i>
                        </span>{data.speed}
                        <span> m/s</span>
                     </p>
                     <p title="pressure">
                        <span className="icon">
                        <i className="wi wi-thermometer"></i>
                        </span>{Math.abs(data.pressure)}
                     </p>
                     <p title="cloudiness">
                        <span className="icon">
                        <i className="wi wi-cloud"></i>
                        </span>{data.clouds}
                        <span>%</span>
                     </p>
                  </div>
               </div>
      </div>
      )
    }

    GenerateHourly(data, index){
      return (
         <div key={index}>
               <div className="widget">
                     <div className="widget__inner">
                        <span className="icon">
                        <i className={`wi wi-owm-night-${data.weather[0].id}`}></i>
                        </span>
                        <p className="status">{data.weather[0].description}</p>
                     </div>
                  <div className="widget__inner">
                     <p className="temp">{data.main.temp}°</p>
                     <p className="temp-range">{data.main.temp_min}-{data.main.temp_max}°</p>
                       <p className="TimePeriod">{data.dt_txt.split(' ')[1]}</p>
                  </div>
                  <div className="widget__inner">
                     <p title="humidity">
                        <span className="icon">
                        <i className="wi wi-raindrop"></i>
                        </span>{data.main.humidity}
                        <span>%</span>
                     </p>
                     <p title="wind and speed direction">
                        <span className="icon">
                        <i className="wi wi-direction-up-right"></i>
                        </span>{data.wind.speed}
                        <span> m/s</span>
                     </p>
                     <p title="pressure">
                        <span className="icon">
                        <i className="wi wi-thermometer"></i>
                        </span>{Math.abs(data.main.pressure)}
                     </p>
                     <p title="cloudiness">
                        <span className="icon">
                        <i className="wi wi-cloud"></i>
                        </span>{data.clouds.all}
                        <span>%</span>
                     </p>
                     </div>
               </div>
         </div>
      )
    }

    componentDidMount(){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.props.stateValue._state},${this.props.stateValue._country}&units=metric&mode=JSON&appid=77e577e4c9e13e85b8e39f71194aea31`)
        .then((response) => {
           this.setState({error:false});
           this.setState({API:response.data.list})
        })
        .catch((error) =>{
             this.setState({error:true});
            console.log(error);
        });
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.stateValue._state},${this.props.stateValue._country}&units=metric&mode=JSON&appid=77e577e4c9e13e85b8e39f71194aea31`)
        .then((response) => {
            this.setState({error:false});
           this.setState({Hourly:response.data.list})
        })
        .catch((error) => {
            this.setState({error:true});
        });
        
    }
    render() {
        var settings = {
                dots: false,
                slidesToShow: 2,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                    }
                  },
                  {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1
                    }
                  }
                ]
            };

            if(this.state.error){
               return (<div>Invalid Details</div>)

            }else{
               return (
                  <div>
                      <Slider {...settings}>
                            {this.state.Hourly.map((data, i) => this.GenerateHourly(data, i))}
                      </Slider>
                      <br/>
                      <Slider {...settings}>
                            {this.state.API.map((data, i) => this.GenerateBox(data, i))}
                      </Slider>
                  </div>
               );
            }
  }
}