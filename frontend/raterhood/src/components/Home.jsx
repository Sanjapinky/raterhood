import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import {useState} from "react";

function Home() {
    const [loginVisible, setLoginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);

    function handleLoginClick() {
        setLoginVisible(true);
    }

    function handleRegisterClick() {
        setRegisterVisible(true);
    }

    return (
        <div>
            <div>
                <button className='login-button' onClick={handleLoginClick}>Login</button>
                <button className='sign-up-button' onClick={handleRegisterClick}>Sign up</button>
                {loginVisible && <Login/>}
                {registerVisible && <Register/>}
            </div>
            <Header/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home