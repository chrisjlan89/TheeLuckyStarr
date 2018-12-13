// module.exports = {

// sendEmail : function(req, res)  {
//     var name = req.body.first
//     var email = req.body.email
//     var message = req.body.message
//     var content = `name: ${name} \n email: ${email} \n message: ${content} `
  
//     var mail = {
//       from: name,
//       to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  //Change to email address that you want to receive messages on
//       subject: 'New Message from Contact Form',
//       text: content
//     }
  
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         res.json({
//           msg: 'fail'
//         })
//       } else {
//         res.json({
//           msg: 'success'
//         })
//       }
//     })
//   }


// }

  