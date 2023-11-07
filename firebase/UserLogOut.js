import { signOut } from "firebase/auth";
import { auth } from "./firebase.config"

export default function UserLogout() {

    const logoutUser = async () => {
        await signOut(auth);
        console.log("user logged out");
    }

    return(
        <>
        <h2>signing user out</h2>
        <button onClick={() => logoutUser()}>log out</button>
        </>
    )
}