const router = require("express").Router();
var nodemailer = require('nodemailer');

//const emailController = require("../controllers/emailController");

let BASEURL = "https://photoslibrary.googleapis.com/v1/albums";

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: "chrisj17@gmail.com",
    pass: "magwitcher"
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


// router.get('/api/photos', (req, res) =>{
//   return axios.get(`${BASEURL}`, {
      
//         headers: {
//            'Client-ID': 'response'
//          }
//        }).then( 
//          (response) => { console.log(response) },
//          (error) => { console.log(error) }
//        );;
     
// })

router.post('/api/send', (req, res) => {
  console.log(req.body)
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var subject = req.body.subject
    var content = `From ${name}, \n inquiring about ${subject}`
  
    var mail = {
      from: name,
      to: 'chrisj17@gmail.com',  //Change to email address that you want to receive messages on
      subject: content,
      text: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })


module.exports = router;
//   router.route('/api/send')
// .post(emailController.sendEmail)