import axios from "axios";
import request from "request";
 
let BASEURL = "https://photoslibrary.googleapis.com/v1/albums";



  

 
 export default {

  search: function(accessTok) {
    console.log(accessTok)
    
    
    return axios.get(`${BASEURL}`, {
      
      headers: {
        'Client-ID': accessTok
      }
    }).then( 
      (response) => { console.log(response) },
      (error) => { console.log(error) }
    );;
  },


  
  // search: function(accessTok) {
  //   console.log(accessTok)
  //   return axios.get('/api/photos', accessTok)
  // },


  sendEmail: function(emailData) {
    console.log(emailData, 'email data')
    return axios.post('/api/send', emailData)
  }
  }




    // // Gets all Articles
    // getPhotos: function() {
    //   return axios.get("/api/photos");
    // },


 // Gets all Players
//  getPlayers: function() {
//     return axios.get("api/players").then((response)=>console.log(response));
//   },


//   // Saves a Player to the database
//   savePlayer: function(PlayerData) {
//     return axios.post("api/players", PlayerData);
//   },

//   findPlayer : function(id){
//     return axios.get("api/players/" + id);
//   },

//   updateHand: function(id){
//     return axios.post(`api/players/${id}`)
//   },

//   // GAME FUNCTIONS / ROUTES

//   // Saves game, this will exxecute when user creates a new game
//   createGame : function(){
//         return axios.post(`api/games`)
//   },

//   updateDeck : function(id, deck){
//       return axios.post(`api/players/${id}`)
//   },


//   // registerUser : function(){
//   //   return axios.post('user/register')
//   // },



 