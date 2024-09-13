import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function GoogleLogin({ setUser }) {

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject); // Pass the userObject to the parent component (Profile)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1790856090-kee9gc0oh34uv29vh584pfl1lub0c5ga.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return (
    <div id="signInDiv"></div>
  );
}

export default GoogleLogin;
