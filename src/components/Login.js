import CheckValidData from '../utils/validate';
import Header from './Header';
import {useRef, useState} from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

// Login/SignUp form component
const Login = () => {
    // It is a React hook that allows you to add state variable to a functional component.
    const [isSignInForm, setIsSignInForm] = useState();
    const [errorMessage, setErrorMessage] = useState(null);
    // The useNavigate hook is used to programmatically navigate to a different route in your application.
    //const navigate = useNavigate();

    // Dispatch a store event to update the user state in the Redux store.
    const dispatch = useDispatch();
    // useRef is a React hook that is used to get the value of a DOM element. We need to define the ref for each field and a variable with useRef as shown below.
    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const fullnameValue = fullname?.current?.value;
        const message = CheckValidData(emailValue, passwordValue);
        setErrorMessage(message);
        if(message) return;
        if(!isSignInForm) {
            // Sign Up using Google Firebase Logic
            createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
                // Signed Up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: fullnameValue,
                    }).then(() => {
                            // Profile updated!
                            const { uid, email, displayName } = auth.currentUser
                            dispatch(addUser({uid: uid,email:email,displayName:displayName}));
                          }).catch((error) => {
                            // An error occurred
                            // ...
                });
                //navigate("/browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-" +errorMessage);
                // ..
            });
        } else{
            // Sign In using Google Firebase Logic
            signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //navigate("/browse");
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setErrorMessage("Invalid User");
            });
            }
    }

    return(
    <div>
        <Header />
        <div>
            <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg" alt="background-image"/>
        </div>
    <div>
        <form onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 p-12 absolute my-36 mx-auto right-0 left-0 bg-black bg-opacity-80 text-white'>
        <h1 className='font-bold text-3xl p-2'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
            {
                !isSignInForm &&
                <input ref={fullname} className='p-2 my-2 w-full bg-gray-700' type='text' placeholder='Full Name' />}
            <input ref={email} className='p-2 my-2 w-full bg-gray-700' type='text' placeholder='Email Address' />
            <input ref={password} className='p-2 my-2 w-full bg-gray-700' type='password' placeholder='Password' />
            <div>
            <p className='text-red-400 text-sm py-2 font-bold'>{errorMessage}</p>
            <button className='bg-red-700 p-2 my-2 w-full rounded-md' onClick={handleButtonClick}>{isSignInForm ? "Sign In": "Sign Up"}</button>
            <p className='text-white cursor-pointer hover:underline' onClick={toggleSignInForm}>
                {
            isSignInForm ? "New to Netflix? Sign Up now?" : "Already a member? Sign In"
            }</p>
            </div>
        </form>
    </div>
    </div>)
}

export default Login;