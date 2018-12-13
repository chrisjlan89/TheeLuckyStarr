import React, { Component } from "react";
//import Login from "../Login";
import "./Home.css";
import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css';



 class Home extends Component {
  componentDidMount() {
    
    console.log('I was triggered during componentDidMount')
    var options = {}
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
    
   
  }

   render() {


    

        //  document.addEventListener('DOMContentLoaded', function() {
        //      var elems = document.querySelectorAll('.parallax');
        //      var instances = M.Parallax.init(elems);
        //  })
       
        return (
    
    

      <div>
        
      <div class="bg">
          <div className="row">
        <div id="para-height" className="parallax-container">
          <div className="parallax"><img class="para-img" src={process.env.PUBLIC_URL + "/assets/paralax_1b.jpg"}/></div>
        </div>
            <div class="section white section-white">
              <div class="row ">
                <div className ="review col s8 offset-m2">
                  <div className="review__text">
                    <h3 className="heading-tertiary">The Venue</h3>
                      <p>The Lucky Starr is an event venue for weddings, reunions, corporate picnics, or any other occasion you might want an outdoor facility. The big cabin and venue can be rented in a package deal. Our packages start at $250 for the venue and weddings start at $800. Please call us for more information and availability for your next event.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet arcu eu condimentum euismod. Maecenas in quam vitae velit eleifend egestas vel in est. Nulla sed sapien laoreet, hendrerit mauris sit amet, varius diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac neque felis. Integer convallis sem at justo volutpat posuere. Aliquam pellentesque egestas consectetur. Donec ultricies quam non nisl rhoncus finibus. Maecenas fringilla consectetur eros eu facilisis.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>  
 <div className="parallax-container">
          <div className="parallax"><img class="para-img" src={process.env.PUBLIC_URL + "/assets/paralax_2.jpg"}/></div>
        </div>
            <div class="section white section-white">
              <div class="row ">
                <div className ="review col s8 offset-m2">
                  <div className="review__text">
                    <h3 className="heading-tertiary">The Venue</h3>
                      <p>The Lucky Starr is an event venue for weddings, reunions, corporate picnics, or any other occasion you might want an outdoor facility. The big cabin and venue can be rented in a package deal. Our packages start at $250 for the venue and weddings start at $800. Please call us for more information and availability for your next event.</p>
                  </div>
                </div>
              </div>
            </div>
     </div>
      </div>

  
        
    );
};
    };


export default Home;