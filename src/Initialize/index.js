import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navigation from '../api/components/Navigation';
import SignIn from '../views/SignIn';

function Initialize() {
  // const [players, setPlayeres] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <>
          <Navigation />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </>
  );
}

export default Initialize;
