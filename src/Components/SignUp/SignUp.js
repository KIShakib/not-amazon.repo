import { Link } from 'react-router-dom';
import './SignUp.css';
import googleLogo from '../../utilities/google.png';
import gitHubLogo from '../../utilities/github (1).png';
import facebookLogo from '../../utilities/facebook.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const SignUp = () => {
    const [err, setErr] = useState("");

    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const userPassword = form.password.value;
        if (userPassword.length < 6) {
            setErr("Password should be more than 6 character...")
            return;
        }

        createUser(userEmail, userPassword)
            .then(result => {
                console.log(result.user);
                setErr("");
                form.reset();
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <div>
            <div className={`signup-box mx-auto mt-10`}>
                <form onSubmit={handleSignUp} autocomplete="off">
                    <h2 className='text-xl'>Sign Up</h2>
                    <div className="inputBox">
                        <input type="text" name="name" required="required" />
                        <span>Name</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="email" name="email" required="required" />
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div>
                        <p className='text-warning'>{err}</p>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <Link href="#">Already Have an Account?</Link>
                        <Link to="/login">Log In</Link>
                    </div>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
            <div className='flex justify-center gap-4 mt-6'>
                <button><img className='w-8' src={googleLogo} alt="img" /></button>
                <button><img className='w-8' src={gitHubLogo} alt="img" /></button>
                <button><img className='w-8' src={facebookLogo} alt="img" /></button>
            </div>
        </div>
    );
};

export default SignUp;