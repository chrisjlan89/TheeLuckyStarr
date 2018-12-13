import React, { Component } from "react";
import API from "../../utils/API"
import './contact.css'
//import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css';

import Login from "../Login";


class ContactForm extends Component {
   componentDidMount() {
    
     console.log('I was triggered during componentDidMount')
   
     var elem = document.querySelectorAll('.select-dropdown');
   
     var instance = M.FormSelect.getInstance(elem);
   
   }

  state = {
    first : "",
    last : "",
    email: "",
    message : "",
    
    isNotSelectedBool : true,
    selectValue : ""
 
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

  // evaluateBool = () => {
    
  //   if (this.state.selectValue > 0) {
  //     this.setState({
  //       isNotSelectedBool : false
       
  //     });
  //     console.log('callbacl')
  //    } else {
       
  //    }
  // }
  
  handleInputChange = (event, evaluateBool) => {
   
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => { if (this.state.selectValue) {
      this.setState({
        isNotSelectedBool : false
       
      });
      console.log('callbacl')
      console.log(this.state)
     } else {
       
     }} )

    evaluateBool = () => {
    
      if (this.state.selectValue > 0) {
        this.setState({
          isNotSelectedBool : false
         
        });
        console.log('callbacl')
       } else {
         
       }
    }
    
    
  //  console.log(this.state)
  };


  handleFormSubmit = event => {
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
      console.log("form");
      console.log(this.state);
    return (


      
<div>

<div class="book">
                        <div class="book__form">
                            <form action="#" class="form">
                                <div class="u-margin-bottom-medium">
                                    <h2 class="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>

                                <div class="form__group">
                                  <div className ="input-field">
                                    <input  
                                    class="form__input validate" 
                                   
                                    id="first_name" 
                                    required="" 
                                    name="first" 
                                    value={this.state.first}
                                    onChange={this.handleInputChange}
                                    //id="first_name" 
                                    type="text" 
                                    



                                    />
                                    <label htmlFor="first_name" class="form__label"></label>
                                    </div>
                                   
                                </div>

                                <div class="form__group">
                                    <input type="email" class="form__input" placeholder="Email address" id="email" required="" />
                                    <label for="email" class="form__label">Email address</label>
                                </div>

                                <div class="form__group u-margin-bottom-medium">
                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="small" name="size" />
                                        <label for="small" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Small tour group
                                        </label>
                                    </div>

                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="large" name="size" />
                                        <label for="large" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                                </div>

                                <div class="form__group">
                                    <button class="btn btn--green">Next step →</button>
                                </div>
                            </form>
                        </div>
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