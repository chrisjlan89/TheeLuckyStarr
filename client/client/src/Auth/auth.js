import {AUTH_CONFIG} from './authVars'

import React, { Component } from "react";

var gapi;
var GoogleAuth; // Google Auth object.
var discoveryDocs = ["https://people.googleapis.com/$discovery/rest?version=v1"];

class Auth extends Component {


//  initClient() {
//   gapi.client.init({
//       'apiKey': AUTH_CONFIG.api_key,
//       'clientId': AUTH_CONFIG.client_id,
//       'scope': 'https://www.googleapis.com/auth/photoslibrary.readonly',
//       'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
//   }).then(function () {
//       GoogleAuth = gapi.auth2.getAuthInstance();

//       // Listen for sign-in state changes.
//       GoogleAuth.isSignedIn.listen(updateSigninStatus);
//   });
// }




//var apiKey = 'AUTH';
// Enter the API Discovery Docs that describes the APIs you want to
// access. In this example, we are accessing the People API, so we load
// Discovery Doc found here: https://developers.google.com/people/api/rest/
//var discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
// Enter a client ID for a web application from the Google API Console:
//   https://console.developers.google.com/apis/credentials?project=_
// In your API Console project, add a JavaScript origin that corresponds
//   to the domain where you will be running the script.
//var clientId = 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com';
// Enter one or more authorization scopes. Refer to the documentation for
// the API or https://developers.google.com/people/v1/how-tos/authorizing
// for details.
//var scopes = 'profile';



 handleClientLoad = () => {
  // Load the API client and auth2 library
  gapi.load('client:auth2', this.initClient);
}
 initClient = () => {
  gapi.client.init({
      apiKey: AUTH_CONFIG.api_key,
      discoveryDocs: discoveryDocs,
      clientId: AUTH_CONFIG.client_id,
      scope: 'https://www.googleapis.com/auth/photoslibrary.readonly'
  }).then( () => {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
    // Handle the initial sign-in state.
    this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  
  });
}
//  updateSigninStatus= (isSignedIn) => {
//   if (isSignedIn) {
//     authorizeButton.style.display = 'none';
//     signoutButton.style.display = 'block';
//     makeApiCall();
//   } else {
//     authorizeButton.style.display = 'block';
//     signoutButton.style.display = 'none';
//   }
// }
 handleAuthClick = (event) => {
  gapi.auth2.getAuthInstance().signIn();
}
 handleSignoutClick= (event) => {
  gapi.auth2.getAuthInstance().signOut();
}
// Load the API and make an API call.  Display the results on the screen.
 makeApiCall= () => {
  gapi.client.people.people.get({
    'resourceName': 'people/me',
    'requestMask.includeField': 'person.names'
  }).then(function(resp) {
    var p = document.createElement('p');
    var name = resp.result.names[0].givenName;
    p.appendChild(document.createTextNode('Hello, '+name+'!'));
    document.getElementById('content').appendChild(p);
  });
}




render(some) {
    return(
    <div>
    <button 
  onClick={this.handleAuthClick}
  class="btn waves-effect waves-light" type="submit" name="action">
  
  Submit
  <i class="material-icons right">send</i>
</button>
    </div>
    )

}
}

export default Auth;