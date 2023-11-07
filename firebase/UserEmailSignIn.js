import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase.config"
import { useState } from "react"

export default function UserEmailSignIn() {
const [loginEmail, setLoginEmail] =useState("");
const [loginPassword, setLoginPassword] =useState("");

const login = async () => {
    try {
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        console.log(user);
    } catch(error) {
        console.log(error.message);
    }
}

    return(
        <>
         <h2>sign in</h2>
                <div>
                    <div>email</div>
                    <input
                        placeholder="email..."
                        value={loginEmail}
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    <div>password</div>
                    <input
                        placeholder="password..."
                        value={loginPassword}
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />
                </div>
                <button onClick={() => {
                    login()
                    setLoginEmail("")
                    setLoginPassword("")
                }}>sign in</button>
        </>
    )
}