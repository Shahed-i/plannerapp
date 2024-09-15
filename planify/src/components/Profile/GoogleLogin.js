import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function GoogleLogin({ user, setUser }) {

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject); // Set the userObject in the parent component
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1790856090-kee9gc0oh34uv29vh584pfl1lub0c5ga.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    if (!user) {
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      );
    } else {
      google.accounts.id.disableAutoSelect(); // Prevent automatic login if already signed in
    }
  }, [user]);

  // Handle user sign out
  const handleSignOut = () => {
    google.accounts.id.revoke(user.email, () => {
      setUser(null); // Clear the user data in the parent component
    });
  };

  return (
    <div className="mt-6">
      {user ? (
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Sign Out
        </button>
      ) : (
        <div id="signInDiv"></div>
      )}
    </div>
  );
}

export default GoogleLogin;
