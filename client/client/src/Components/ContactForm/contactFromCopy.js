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




{this.state.isNotSelectedBool ? (
  <div>
    <div className ="row">
    </div>
    <div className ="row">
    </div>
    <div className ="row">
    </div>

      <div className = "row">



        <div className="input-field col s5 col m5 book offset-s3 offset-m3">
          <select
          
          className = "col s5 col m5 offset-s3"
          value={this.state.selectValue} 
          onChange={this.handleInputChange} 
          name="selectValue"
        >
          <option value="" disabled selected>Choose your option</option>
          <option value="Rates">Rates</option>
          <option value="Events">Events</option>
          <option value="Host Charity">Host a charitable event</option>
        </select>
    
        </div>
      </div>
  </div>
  
)

:
(


  

<div>

  <div className ="row">
  </div>
  <div className ="row">
  </div>
  
  
  <div className ="row">
  



  

  </div>



  <form>

  <div className="input-field col s5 col m5">
  <select
          
          className = "col s5 col m5 offset-s3"
          value={this.state.selectValue} 
          onChange={this.handleInputChange} 
          name="selectValue"
        >
          <option value="" disabled selected>Choose your option</option>
          <option value="Rates">Rates</option>
          <option value="Events">Events</option>
          <option value="Host Charity">Host a charitable event</option>
        </select>  
</div>

   <div className ="book  offset-s4 col s8">
    <div className= "book_form">
    <div className="row">
      <div className="input-field  col s4  offset-s1">
        <input 
        name="first" 
        value={this.state.first}
        onChange={this.handleInputChange}
        id="first_name" 
        type="text" 
        className="validate"
      
        />
        <label htmlFor="first_name">First Name</label>
      </div>
      </div>
      <div className="row">
      <div className="input-field col s4 offset-s1 ">
        <input 
        name="last" 
        value={this.state.last}
        onChange={this.handleInputChange}
        id="last_name" 
        type="text" 
        className="validate"/>
        <label htmlFor="last_name">Last Name</label>
      </div>
    </div>
 
 
  <div className="row">
    <div className="input-field col s4   offset-s1">
      <input 
      name="email" 
      value={this.state.email}
      onChange={this.handleInputChange}
      id="email" 
      type="email" 
      className="validate"/>
      <label htmlFor="email">Email</label>
    </div>
  </div>


  
 
    <div className="row">
      <div className="input-field col s4  offset-s1">
        <textarea 
        name="message" 
        value={this.state.message}
        onChange={this.handleInputChange}
        id="textarea1" 
        class="materialize-textarea">
        </textarea>
        <label htmlFor="textarea1">Textarea</label>
      </div>
    
    </div>

    <div className="row">
    <button onClick={this.handleFormSubmit} class="btn waves-effect waves-light" type="submit" name="action">
    <i className="material-icons right"> Send</i>
  </button>  
    
    </div> 
  




        
  </div>
  </div>
</form>

</div>
)}

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