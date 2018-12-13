import React, { Component } from "react";
import API from "../../utils/API";
import  GoogleLogin  from 'react-google-login';
import {AUTH_CONFIG} from '../../Auth/authVars';
// import Auth from '../../Auth/auth';
import  Gallery  from 'react-grid-gallery';
// import Gallery  from 'react-photo-gallery' ;
import './Cabin.css'
import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css';




	
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
    
    src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin1.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin1.jpg",
    className: "materialboxed",
    isSelected : false,
    thumbnailWidth: 144,
        thumbnailHeight: 174,
       
        caption: "The Big Cabin "
  },
  {
  
   src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin2.jpg",
   thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin2.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
     
        caption: "Back porch for upstairs unit"
  },
  {
   
   src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin3.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin3.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
     
        caption: "Upstairs, front porch with swing, BBQ and amazing view!"
  },
  {
    src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin4.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin4.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
       
        caption: "Upstairs and Downstairs units are separate. Both have small front porches."
  },
   



  {
    src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin5.jpg",
    thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin5.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
      
        caption: "Upstairs, large hand-made cedar table built in to eat or play games."

   
  },
  {
   src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin6.jpg",
   thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin6.jpg",
    className: "materialboxed",
    thumbnailWidth: 320,
        thumbnailHeight: 174,
       
        caption: "Cozy living room with a wood burning stove, fire wood is provided. Don't worry there is an electric wall unit for heat and air and also a propane heat unit! The sofa makes a pull out double bed. The TV's do not have cable or satellite, but a DVD and VHS player are provided in both units. Bring your own movies to watch!"

  },
  
  {
   src: process.env.PUBLIC_URL + "/assets/img/cabin/cabin7.jpg",
   thumbnail : process.env.PUBLIC_URL + "/assets/img/cabin/cabin7.jpg",
   className: "materialboxed",
   thumbnailWidth: 320,
       thumbnailHeight: 174,
      
       caption: "Queen size bed in upstairs unit. Linens are provided."

 },


 ];
 




 class Cabin extends Component {
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
        <h2 className="main-title centered"> Rediscover Nature in our beautiful and Historical Cabin</h2>
      </div>
      <div className="col s8 offset-s2">
        <h5 className= "main-desc">Cabin this Cabin that this is a cabin it has cabin history look at the beauty of nature and such Cabin this Cabin that this is a cabin it has cabin history look at the beauty of nature and such Cabin this Cabin that this is a cabin it has cabin history look at the beauty of nature and such Cabin this Cabin that this is a cabin it has cabin history look at the beauty of nature and such Cabin this Cabin that this is a cabin it has cabin history look at the beauty of nature and such Cabin this Cabin that this is a cabin it has cabin history look at the beauty of nature and such Cabin this Cabin that this is a cabin it has cabin history look at the beauty of nature and such Cabin this Cabin that this is a cabin it has cabin history look at the beauty of nature and such
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
              </blockquote>
              <figcaption className="venue-review__user">
                  <img src={process.env.PUBLIC_URL + "/assets/img/gallery4.jpg"} alt="User 1" className="venue-review__photo" />
                  <div className="venue-review__user-box">
                      <p className="venue-review__user-name">Nicholas Cage</p>
                      <p className="venue-review__user-date">Jan 12th, 2017</p>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
              </blockquote>
              <figcaption className="venue-review__user">
                  <img src={process.env.PUBLIC_URL + "/assets/img/gallery4.jpg"} alt="User 1" className="venue-review__photo" />
                  <div className="venue-review__user-box">
                      <p className="venue-review__user-name">Megan Tully</p>
                      <p className="venue-review__user-date">Sept 27th, 2017</p>
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


export default Cabin;