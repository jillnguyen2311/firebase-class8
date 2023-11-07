import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase.config"
import { useState } from "react"

export default function UserRegistration() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <h3>welcome to the app</h3>
            <div>
                <h2>register</h2>
                <div>
                    <div>email</div>
                    <input
                        placeholder="email..."
                        value={registerEmail}
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <div>password</div>
                    <input
                        placeholder="password..."
                        value={registerPassword}
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />
                </div>
                <button onClick={() => {
                    register()
                    setRegisterEmail("")
                    setRegisterPassword("")
                }}>register user</button>
            </div>
        </>
    )
}