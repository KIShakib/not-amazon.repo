import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../utilities/google.png';
import gitHubLogo from '../../utilities/github (1).png';
import facebookLogo from '../../utilities/facebook.png';
import { AuthContext } from '../../Contexts/UserContext';

const Login = () => {

    const { userLogin, signInWithGoogle, signInWithGitHub, signInWithFacebook, user } = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const userEmail = form.email.value;
        const userPassword = form.password.value;

        userLogin(userEmail, userPassword)
            .then(result => {
                console.log(result.user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.err(err);
            })
    }

    useEffect(() => {
        if(user){
            navigate(from)
        }
    }, [user]);


    return (
        <div>
            <div className={`box mx-auto mt-10`}>
                <form onSubmit={handleLogin} autocomplete="off">
                    <h2 className='text-xl'>Log in</h2>
                    <div className="inputBox">
                        <input type="email" name="email" required="required" />
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <Link href="#">Forgot Password ?</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div className='flex justify-center gap-4 mt-6'>
                <button onClick={signInWithGoogle}><img className='w-8' src={googleLogo} alt="img" /></button>
                <button onClick={signInWithGitHub}><img className='w-8' src={gitHubLogo} alt="img" /></button>
                <button onClick={signInWithFacebook}><img className='w-8' src={facebookLogo} alt="img" /></button>
            </div>
        </div>
    );
};

export default Login;