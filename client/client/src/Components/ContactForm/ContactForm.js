import React, { Component } from "react";
import API from "../../utils/API"
import './contact.css'
//import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css';

import Login from "../Login";

let l = 'l'
let stuff;
let instances;

var elem = document.querySelectorAll('.select-dropdown');
   
var instance = M.FormSelect.getInstance(elem);

document.addEventListener('DOMContentLoaded', function(stuff, instances) {
  var options = {}; 
 // var elems = document.querySelectorAll('.modal');
 // return stuff = 'stuff';
//  return instances = M.Modal.init(elems, options);
  
  M.AutoInit();
});


class ContactForm extends Component  {
  
   componentDidMount(instances) {
    
     console.log('I was triggered during componentDidMount')
      console.log(l)
      console.log(instances)
      console.log(stuff)
    //  var elem = document.querySelectorAll('.select-dropdown');
   
    //  var instance = M.FormSelect.getInstance(elem);

    //  document.addEventListener('DOMContentLoaded', function(instances) {
    //    var options = {}; 
    //    var elems = document.querySelectorAll('.modal');
    //    return instances = M.Modal.init(elems, options);
    // //  M.AutoInit();
    // });
  
  }

  state = {
    first : "",
    last : "",
    email: "",
    message : "",
    
    isNotSelectedBool : true,
    selectValue : "",
   
 
  };


  // handleDropdownChange = event => {
  //   //const { name, value } = event.target;
  //   this.setState({
  //     selectValue : event.target.value
  //   });
  //   console.log(this.state)
  

  //   if (this.state.selectValue > 0) {
  //     this.setState({
  //       isNotSelectedBool : false
  //     });
  //    } else {
       
  //    }
  // }

  //  evaluateBool = () => {
    
  //    if (this.state.selectValue) {
  //      console.log('d')
       
  //      }
       
  //      else {
  //      console.log('f')
  //     }
  //  }

  setBool = () => { if (this.state.selectValue) {
    console.log('removing attr')
    document.getElementsById("disabled").removeAttribute('disabled value');
    console.log('callbacl')
    console.log(this.state)
    this.setState({
      isNotSelectedBool : false
     
    });
   
   }
  }
  
  handleInputChange = (event, setBool) => {
   
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => {
      if (this.state.selectValue) {
        console.log('removing attr')
        console.log('callback')

        console.log(this.state)
        this.setState({
          isNotSelectedBool : false
         
        });
       
       }
    })
            
     }; 

     modalTrigger = (instances) => {
      
      console.log('modal trigger func')
    
      instances.open();
      
    }

    
  handleFormSubmit = (event, instances) => {
    event.preventDefault();
    if (this.state.first && this.state.email && this.state.message) {
      API.sendEmail({
        name: `${this.state.first} ${this.state.last}`,
        email: this.state.email,
        message: this.state.message,
        subject : this.state.selectValue
      })
       
        .catch(err => console.log(err));
    }

    else {
      event.preventDefault()
      this.modalTrigger(instances)
    }
  };


  
//  isSelected = () => {
//    if (this.state.selectValue > 0) {
//     this.setState({
//       isNotSelectedBool : false
//     });
//    } else {
     
//    }
//  }



    render() {

      const tweetersIframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6424214.836942619!2d-84.1311926038615!3d38.201092061236345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860b01c951121ab%3A0x1cc545136f9fda86!2sLucky+Starr+Event+Venue!5e0!3m2!1sen!2sus!4v1543375745517" zoom="400m" width="800" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      console.log("form");
      console.log(this.state);
    return (


      
<div>

<div className="row">
<div class="book">
                        <div class="book__form">

                        
                            <form action="#" class="form">
                                <div class="u-margin-bottom-smedium">
                                    <h2 class="heading-secondary">
                                        Send us an Email !
                                    </h2>
                                </div>

                                <div class="form__group u-margin-bottom-medium">

                                <div class=" u-margin-bottom-small">
                                 <h5> What are you inquiring about ? </h5>
                                </div>
                                <form action="#">
                                
                                  <label>
                                  <input 
                                  type="radio"
                                  //value={this.state.selectValue}  
                                  onChange={this.handleInputChange} 
                                  value="Rates"
                                  name="selectValue"  />                                    
                                   <span>Rates</span>
                                  </label>
                                
                                
                                  <label>
                                  <input 
                                  type="radio"
                                  //value={this.state.selectValue} 
                                  onChange={this.handleInputChange}
                                  value="Events" 
                                  name="selectValue"  
                                   />
                                    <span>Events</span>
                                  </label>
                                
                                
                                  <label>
                                  <input 
                                  type="radio"
                                  //value={this.state.selectValue} 
                                  onChange={this.handleInputChange} 
                                  name="selectValue"  
                                  value = "Hosting a Chartible Event"
                                  />
                                    <span>Chartible Hosting</span>
                                  </label>
                                
                                
                                  <label>
                                    <input 
                                    type="radio"
                                    //value={this.state.selectValue} 
                                    onChange={this.handleInputChange} 
                                     name="selectValue" 
                                     value = "General Question"
                                     />
                                    <span>Anything Else</span>
                                  </label>
                                
                              </form>
                            </div>

                                  <div className ="input-field">
                                    <input  
                                    class="form__input validate" 
                                  
                                    id="disabled first_name" 
                                    required="" 
                                    name="first" 
                                  //  disabled value = ""
                                    value={this.state.first}
                                    onChange={this.handleInputChange}
                                    //id="first_name" 
                                    type="text" 
                                    



                                    />
                                    <label htmlFor="first_name" > First Name</label>
                                    </div>
                                   
                                

                                
                                <div className ="input-field">
                                    <input  
                                    class="form__input validate"  
                                    name="last" 
                                    value={this.state.last}
                                    onChange={this.handleInputChange}
                                    id="last_name" 
                                    type="text" 
                                    className="validate"/>
                                    <label htmlFor="last_name">Last Name</label>
                                    </div>
                                

                                <div class="form__group">
                                <div className ="input-field">
                                    <input 

                                    class="form__input validate"  
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    id="email" 
                                    type="email" 
                                    />
                                    <label htmlFor="email" >Email</label>
                                    

                                    </div>
                                </div>


                                <div class="form__group">
                                <div className ="input-field">
                                <textarea 
                                name="message" 
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                id="textarea1" 
                                class="form__input materialize-textarea">
                                </textarea>
                                <label htmlFor="textarea1">Textarea</label>
                                    </div>
                                </div>



                              

                            <div class="form__group">
                                    <div class="form__radio-group">
                                        
                                    </div>


                                    
                                    <button 
                                    onClick ={this.handleFormSubmit}
                                    class="btn btn--green" 
                                    //data-target="modal1" 
                                    //class="btn modal-trigger"
                                    >
                                   Hmmm</button>
                                </div>
                            </form>
                        </div>
                        
                         </div>
                         <div className ="section-faq">
                          <h6 > Frequnetly Asked Question</h6>
                         <ul class="collapsible">
                         <li>
                           <div class="collapsible-header"><i>Q : </i>How do I ?</div>
                           <div class="collapsible-body"><span><i>A : </i>Lorem ipsum dolor sit amet.</span></div>
                         </li>
                         <li>
                            <div class="collapsible-header"><i>Q : </i>Where do I ?</div>
                           <div class="collapsible-body"><span><i>A : </i>Lorem ipsum dolor sit amet.</span></div>
                         </li>
                         <li>
                        
                           <div class="collapsible-header"> <i>Q : </i>How do I ?</div>
                           <div class="collapsible-body"><span> <i>A : </i>Lorem ipsum dolor sit amet.</span></div>
                         </li>
                       </ul>
                              
                    </div>
                    


                  
      

                    <div id="modal1" class="modal">
    <div class="modal-content">
      <h4 className ="modal-title"></h4>
      <p className ="modal-text"></p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
    
  </div>

                {  //  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6424214.836942619!2d-84.1311926038615!3d38.201092061236345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860b01c951121ab%3A0x1cc545136f9fda86!2sLucky+Starr+Event+Venue!5e0!3m2!1sen!2sus!4v1543375745517" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> 
    }

   

    </div>
    <div className ="map-area">
    <div dangerouslySetInnerHTML={{ __html: tweetersIframe}}/>
    MAP
    </div>

</div>

);
};
    };
 
 
 export default ContactForm;





// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });