import styles from '@/styles/Home.module.css'
import GoogleSignIn from '@/firebase/GoogleSignin'

import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebase.config'
import UserRegistration from '@/firebase/UserRegistration'
import UserEmailSignIn from '@/firebase/UserEmailSignIn'
import UserLogout from '@/firebase/UserLogOut'

export default function Home() {
  const [user, setUser] = useState({});
  //needed this in order to get an update on the current user logged in
  //this will either show or hide the users info if not logged in properly
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  }, [])

  return (
    <>
      <main className={`${styles.main}`}>
        <GoogleSignIn />
        <UserRegistration/>
        <UserEmailSignIn/>
        <UserLogout/>
        <div>
          <h2>user logged in: </h2>
          <div>
            {user?.email}
          </div>
        </div>
      </main>
    </>
  )
}
