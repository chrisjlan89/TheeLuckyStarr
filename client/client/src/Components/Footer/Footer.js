import React, { Component } from "react";
import '../Footer/Footer.css';

import GoogleMapReact from 'google-map-react';
 






 
class Footer extends Component {

  

state = {
  center: {
    
    lat: 35.65309,
    lng: -85.1093942,
  },
  zoom: 12
};
  render() {
     return (

<div>

<footer className="page-footer">
       
          <div className="footer-copyright">
          <div className="container">
          <div className="row">
            
            <div className="col l2 offset-s2  offset-l3 col s2">
            
            <a href ="https://www.facebook.com/luckystarr6086/">
            <img className ="social-container" src={process.env.PUBLIC_URL + "assets/img/Facebook_icon_20132.png"}/>
            </a>
            
            </div>

            <div className="map-con">

          { //  <GoogleMapReact
           // bootstrapURLKeys={{ key: 'AIzaSyD-IBAbJcF67UQ0MPrg7zqhshyRWuJG1T0' }}
           // defaultCenter={this.state.center}
           // defaultZoom={this.state.zoom}
           // text={'L'}
          ///>

          }
          </div>

        <div className="numbers-con">
          <div className="first-number">
            <p className="name">Kellady : </p>
            <p className="number">  7326162126 </p>
          </div> 
          <div className="first-number">
            <p className="name">Kellady : </p>
            <p className="number">  7326162126 </p>
          </div>
        </div>

          </div>
        </div>
          
          </div>
        </footer>
        </div>
      )
    }
    }

    export default Footer;