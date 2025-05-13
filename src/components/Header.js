import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { PROFILE_IMG } from "../utils/constants";
import {setGptSearch} from "../utils/gptSlice";
import { setPreferredLanguage } from "../utils/appConfigSlice";

const Header = () =>{
    // Dispatch a store event to update the user state in the Redux store.
    const dispatch = useDispatch();
    // The useNavigate hook is used to programmatically navigate to a different route in your application.
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            dispatch(removeUser());
            //navigate("/");
          }).catch((error) => {
            navigate("/error");
          });
        
    };

    const isGptSearch = useSelector(store=> store.gpt.isGptSearch);

    useEffect(() => {
        // The onAuthStateChanged function is used to listen for changes in the user's authentication state. It takes a callback function that will be called whenever the user's authentication state changes.
        // This function will return a function that can be used to unsubscribe from the listener.
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              // Redirect to browse page
              navigate("/browse");
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
          });

          // Unsubscribe from the listener when the component is unmounted so that it will not get called when not needed.
            return () => unsubscribe();
        },[]);

        const handleGptSearchClick = ()=>{
          dispatch(setGptSearch());
          // console.log("clicked gpt search button");

        }

        const handleLanguageChange = (e) => {
          dispatch(setPreferredLanguage(e.target.value));
        }
    return(
    <div className="absolute py-2 bg-gradient-to-b from-black z-30 flex justify-between left-4 right-0">
        <div className="">
        <img className="w-40" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        </div>
        <div className="right-0">
        </div>
        {user && <div className="w-auto items-center flex justify-center text-white font-bold text-lg px-2 ">
        {isGptSearch && <select className="bg-gray-800 text-white font-medium border-white p-2 m-2" onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hin">Hindi</option>
          <option value="mr">Marathi</option>
        </select>}
        <button onClick={handleGptSearchClick} className="mx-4 w-28 py-1 px-2 bg-red-700 hover:bg-opacity-80 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">{isGptSearch ? "Home": "Gpt Search"}</button>
            <span className="font-semibold text-pretty"><img className="w-12" alt="profile-icon" src= {PROFILE_IMG}/></span><span className="px-2 mx-2 rounded-md ">{user.displayName}</span>
            <button onClick={handleSignOut} className="mx-4 w-16 py-2 bg-red-700 text-sm rounded-sm hover:bg-opacity-80 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Sign Out</button>
        </div>}
    </div>)
}

export default Header;