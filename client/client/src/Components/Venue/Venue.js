import React, { Component } from "react";
import API from "../../utils/API";
import  GoogleLogin  from 'react-google-login';
import {AUTH_CONFIG} from '../../Auth/authVars';
//mport Auth from '../../Auth/auth';
import  Gallery  from 'react-grid-gallery';
// import Gallery  from 'react-photo-gallery' ;
import './Venue.css'
import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css';

//  const testFolder = process.env.PUBLIC_URL + "/assets/img/venue";
//  const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//    files.forEach(file => {
//      console.log(file); // use those file and return it as a REST API
//    });
//  })




	
	// img class
	// function image(src, thumbnail, thumbnailWidth, thumbnailHeight, caption, arr) {
	// 	this.src = src;
		
	// 	this.thumbnail = thumbnail;
	// 	this.thumbnailWidth = thumbnailWidth;
	// 	this.thumbnailHeight = thumbnailHeight;
	// 	this.caption = caption;
	// 	// place img obj in imgs arr when obj gets created
	// 	IMAGES.push(this);
	// }

	//  create our imgs
  // image1 = new image (process.env.PUBLIC_URL + "/assets/paralax_1.jpg", process.env.PUBLIC_URL + "/assets/paralax_1.jpg", 144, 
  // 174,'flavatown',  IMAGES);

	// image2 = new image (process.env.PUBLIC_URL + "/assets/paralax_2.jpg", process.env.PUBLIC_URL + "/assets/paralax_2.jpg", 144, 
  // 174,'flavatown',  IMAGES);

	// image3 = new image (process.env.PUBLIC_URL + "/assets/paralax_1.jpg", process.env.PUBLIC_URL + "/assets/paralax_1.jpg", 144, 
  // 174,'flavatown',  IMAGES);


	// image4 = new image (process.env.PUBLIC_URL + "/assets/paralax_1.jpg", process.env.PUBLIC_URL + "/assets/paralax_1.jpg", 144, 
  // 174,'flavatown',  IMAGES);




  const PHOTO_SET = [
    {
      src: process.env.PUBLIC_URL + "/assets/paralax_1.jpg",
      className: 'materialboxed',
      width: 4,
      height: 3
    },
    {
      src: process.env.PUBLIC_URL + "/assets/paralax_1.jpg",
      width: 1,
      height: 1
    }
  ];

 const IMAGES = [
   {
    
     src: process.env.PUBLIC_URL + "/assets/img/venue/venue1.jpg",
     thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue1.jpg",
     className: "materialboxed",
     isSelected : false,
     thumbnailWidth: 144,
         thumbnailHeight: 174,
        
         caption: "stuff"
   },
   {
   
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue2.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue2.jpg",
     className: "materialboxed",
     thumbnailWidth: 320,
         thumbnailHeight: 174,
      
         caption: "stuff"
   },
   {
    
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue3.jpg",
     thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue3.jpg",
     className: "materialboxed",
     thumbnailWidth: 320,
         thumbnailHeight: 174,
      
         caption: "stuff"
   },
   {
     src: process.env.PUBLIC_URL + "/assets/img/venue/venue4.jpg",
     thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue4.jpg",
     className: "materialboxed",
     thumbnailWidth: 320,
         thumbnailHeight: 174,
        
         caption: "stuff"
   },
    



   {
     src: process.env.PUBLIC_URL + "/assets/img/venue/venue5.jpg",
     thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue5.jpg",
     className: "materialboxed",
     thumbnailWidth: 320,
         thumbnailHeight: 174,
       
         caption: "stuff"

    
   },
   {
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue6.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue6.jpg",
     className: "materialboxed",
     thumbnailWidth: 320,
         thumbnailHeight: 174,
        
         caption: "stuff"

   },
   
   {
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue7.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue7.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
       
        caption: "stuff"

  },
   
  {
    
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue8.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue8.jpg",
    className: "materialboxed",
    isSelected : false,
    thumbnailWidth: 144,
        thumbnailHeight: 174,
       
        caption: "stuff"
  },
  {
  
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue9.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue9.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
     
        caption: "stuff"
  },
  {
   
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue10.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue10.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
     
        caption: "stuff"
  },
  {
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue11.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue11.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
       
        caption: "stuff"
  },
   



  {
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue12.jpg",
     thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue12.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
      
        caption: "stuff"

   
  },
  {
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue13.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue13.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
       
        caption: "stuff"

  },
  
  {
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue14.jpg",
     thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue14.jpg",
   className: "materialboxed",
   thumbnailWidth: 320,
       thumbnailHeight: 174,
      
       caption: "stuff"

 },


 {
    
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue15.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue15.jpg",
    className: "materialboxed",
    isSelected : false,
    thumbnailWidth: 320,
        thumbnailHeight: 174,
       
        caption: "stuff"
  },
  {
  
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue16.jpg",
     thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue16.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
     
        caption: "stuff"
  },
  {
   
    src: process.env.PUBLIC_URL + "/assets/img/venue/venue17.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/venue/venue17.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
     
        caption: "stuff"
  },
 

 ];
 




 class Venue extends Component {
  componentDidMount() {
    
    console.log('I was triggered during componentDidMount')
    var options = {}
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
   

    
  }
  
 

   ael = event => {
   // instances.open();

    // document.addEventListener('DOMContentLoaded', function() {
    //    var elems = document.querySelectorAll('.materialboxed');
    //    var instances = M.Materialbox.init(elems, options);
    //  });

    console.log('sssss')
  

   }

  // hfs = event => {
  //   event.preventDefault();
   
  //     API.search({
  //       token : console.log(responseGoogle)
  //     })
  //       //.then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   };
 // ComponentDidMount() {
  // document.addEventListener('DOMContentLoaded', function() {
    //    var elems = document.querySelectorAll('.materialboxed');
    //    var instances = M.Materialbox.init(elems, options);
    //  });

   // console.log('comp did mount')
 // }

 


   render(some) {
     
    const responseGoogle = (response) => {
      console.log(`full responnse`)
      console.log(response)
      console.log(response.tokenObj.access_token);

      API.search({
        token : response.tokenObj.access_token
      })
     

    }
    
   
     
    
     return (

    
  <div>

 
     
    <div className="row">
    </div> 
    <div className="row">
    </div> 
 
    <div className = "row">
      <div className="col s6 offset-s3">
        <h2 className="main-title centered"> Celebrate your special day with us</h2>
      </div>
      <div className="col s8 offset-s2">
        <h5 className= "main-desc"> We promise that if you choose The Lucky Starr as your host for the day you;ve been drraming about your whole life that you will not be disapointed.
        We promise that if you choose The Lucky Starr as your host for the day you;ve been drraming about your whole life that you will not be disapointed.
        We promise that if you choose The Lucky Starr as your host for the day you;ve been drraming about your whole life that you will not be disapointed.
        We promise that if you choose The Lucky Starr as your host for the day you;ve been drraming about your whole life that you will not be disapointed.
        We promise that if you choose The Lucky Starr as your host for the day you;ve been drraming about your whole life that you will not be disapointed.
        </h5>
      </div>
  
    </div>
  
   

      <div className="gal-con">
        <div className = "row">
          <div className="col s6 offset-s3">
          <Gallery images={IMAGES} />
          { // <GridGallery images={IMAGES}/> 
     }
          </div>
      
        </div>
      </div>

      <div className = "row"> 
      <div className="detail">
      <div className=" col s6">
      <div className="description">
          <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className="paragraph">
              Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className="list">
              <li className="list__item">Close to Chatanooga</li>
              <li className="list__item">Breakfast included</li>
              <li className="list__item">Other Thing Here</li>
              <li className="list__item">Free wifi in all rooms</li>
              <li className="list__item">Air conditioning and heating</li>
              <li className="list__item">Pets allowed</li>
              <li className="list__item">Can acccomdate large weddding parites</li>
              <li className="list__item">Perfect for families</li>
          </ul>
          <div className="recommend">
              <p className="recommend__count">
                 Note : Cabins are not included in the base price of weddings or events
              </p>
              
          </div>
          </div>
      </div>
      <div className = "col s4">
       
      <figure className="user-reviews">
         <figure className="venue-review">
              <blockquote className="venue-review__text">
              I had my daughters wedding and reception there. Corey and Ashley Hart. It's a quiet place and the escape is breathe taking. Kellady, Mike and staff were amazing, friendly, and helpful in many ways. They made you feel right at home. The place is reasonable and very clean. It's a must see to appreciate the beauty. Thank you Kellady, Mike and staff for making this day so special. Mark and Liz Crum... Your new New Jersey friends. Your the best.

              </blockquote>
              <figcaption className="venue-review__user">
                  <img src={process.env.PUBLIC_URL + "/assets/img/venueReview/review1.jpg"} alt="User 1" className="venue-review__photo" />
                  <div className="venue-review__user-box">
                      <p className="venue-review__user-name">Elizabeth  
                      </p>
                      <p className="venue-review__user-name">Reinhardt-Crum 
                      </p>
                      
                      <p className="venue-review__user-date">June 11th, 2016</p>
                  </div>
                  <div className="venue-review__rating">
                  <i className="fas fa-star"> </i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  
                  </div>
              </figcaption>
          </figure>

          <figure className="venue-review">
              <blockquote className="venue-review__text">
              Definitely a beautiful place for nearly all events, especially concerts or weddings! The landscape is gorgeous, there is plenty of space, the people are extremely courteous and professional, and there's even a stage with a high-quality sound system! I can't wait to visit again and I highly recommend this venue to anyone in need of a great gathering place for any event!

              </blockquote>
              <figcaption className="venue-review__user">
                  <img src={process.env.PUBLIC_URL + "assets/img/venueReview/review2.jpg"} alt="User 1" className="venue-review__photo" />
                  <div className="venue-review__user-box">
                      <p className="venue-review__user-name">James Lowery</p>
                      <p className="venue-review__user-date">December 27th, 2015</p>
                  </div>
                  <div className="venue-review__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  </div>
              </figcaption>
          </figure>
          

        
          
      </figure>
      </div>
      </div>
      </div>

     
      <GoogleLogin
      clientId={AUTH_CONFIG.client_id}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
       />
     
</div>
       
    
     );
   };
 }


//  <div className ="row">
//       <div className ="gal-box">  
//      <div className="col s3 col m3 offset-s1 offset-m1">
//      <img className="materialboxed photo-1"  src={process.env.PUBLIC_URL + "/assets/paralax_2.jpg"}/>
//      </div>
//      <div className="col s3 col m3 ">
//      <img className="materialboxed photo-1 mar"  src={process.env.PUBLIC_URL + "/assets/paralax_2.jpg"}/>
//      </div>
//      <div className="col s3 col m3 ">
//      <img className="materialboxed photo-1 mar"  src={process.env.PUBLIC_URL + "/assets/paralax_2.jpg"}/>
//      </div>
//      </div>
//      </div>


// const Gallery =(props) => {
//     return (


//   <div>
//     This is the Gallery Page
//   </div>

// );
// };


export default Venue;