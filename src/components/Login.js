import React, { useRef, useState } from 'react'
import Header from "./Header"
import { NetflixBG } from '../utils/Image'
import Footer from './Footer'
import { TextField} from '@mui/material'
import { useFormControl } from "@mui/material/FormControl";
import { ValidationForm, ValidationFull } from './ValidationForm'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useEffect } from 'react'
import { updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/UserSlice'



const Login = () => {
  const [isLogin , setisLogin] = useState(true)
  const [Error , setError] = useState(null)
  const [ErrorFull , setErrorFull] = useState(null)
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null); 
  const [showMessage, setShowMessage] = useState(false);
 
  const formControl = useFormControl();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handler = () => {
    setisLogin(!isLogin)
    setError(null)
    setErrorFull(null)
  }

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const Email = useRef(null)
  const Password = useRef(null)
  const Fullname = useRef(null)
 
  // Signed up 
  const FormValidationName = () => {
    const Validation = ValidationForm(Email.current.value , Password.current.value)
    const ValidationName = ValidationFull(Fullname.current.value)
    setError(Validation)
    setErrorFull(ValidationName)
    if(Validation) return

    if(!isLogin){
      createUserWithEmailAndPassword(auth, Email.current.value , Password.current.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log(user)
      updateProfile(user, {
        displayName: Fullname.current.value,
        photoURL : "https://lh3.googleusercontent.com/a/ALm5wu12x8qS4EM_kVkoDaadUMUbMKNp-_dztIditBtndw=s96-c"
      })
      .then( () => {
        const {uid , email , displayName , photoURL} = auth.currentUser
        dispatch(addUser({uid: uid , email: email, displayName: displayName , photoURL : photoURL}))
      })
      navigate("/browse")
      setSuccessMessage("Account Create SuccessFully ")

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorMessage){
      setError("Already Registered Email")
      }
    });}
    }
    useEffect(() => {
      setShowMessage(true);
  
      const delay = 30000; 
  
      setTimeout(() => {
        setShowMessage(false);
      }, delay);
    }, []);

   // Signed in 
  const FormValidation = () => {
  const Validation = ValidationForm(Email.current.value , Password.current.value)
  setError(Validation)
  if(Validation) return

  if(isLogin){
    signInWithEmailAndPassword(auth, Email.current.value , Password.current.value)
.then((userCredential) => {
 
  const user = userCredential.user;
  console.log(user)
  navigate("/browse")
  setSuccessMessage("Welcome Back "+ user.displayName )
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  if(errorMessage){
      setError("Invalid Email and Password")
      }
});}
}


  const inputStyles = {
    color: "#BCBBBA",
    fontSize : "16px",
  };

  const containerStyles = {
    border: "1px solid #626261",
    backgroundColor: "#333333",
  };

  return (
    <>
    <div>
      <div>
      <div className=" bg-black opacity-[0.50] h-[1190px] w-[100%] absolute top-0"></div>
      <img src={NetflixBG}  className='w-[100%] h-[1190px] ' alt='login'/>
      <form className='bg-black opacity-[0.87] h-[690px] w-[450px] absolute top-[90px] left-[37%]' onSubmit={(e) => e.preventDefault()}>
        <h1 className='text-white font-body font-semibold text-[32px] pt-[70px] pl-[68px] pb-[30px] cursor-pointer'>{isLogin ? "Sign In" : "Sign Up" }</h1>
        <TextField
          label= "Email or Phone Number"
          id="filled-basic"
          variant="filled"
          required
          inputRef={Email}
          // value={for on change}
          className='h-[58px]  w-[315px] left-[68px] top-2 rounded-b-[3px] rounded-t-[3px] '
          InputProps={{
            style: inputStyles,
          }}
          InputLabelProps={{
            style: inputStyles,
          }}
          style={containerStyles}
          {...formControl}
        />
         {!isLogin && <TextField
          label="Fullname"
          id="filled-basic"
          variant="filled"
          inputRef={Fullname}
          required
          // value={for on change}
          className='h-[58px]  w-[315px] left-[68px] top-5 rounded-b-[3px] rounded-t-[3px]'
          InputProps={{
            style: inputStyles,
          }}
          InputLabelProps={{
            style: inputStyles,
          }}
          style={containerStyles}
          {...formControl}
        />}
        <TextField
          label="Password"
          id="filled-basic"
          variant="filled"
          inputRef={Password}
          required
          type={showPassword ? 'text' : 'password'}
        InputProps={{
        style: inputStyles,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
          className='h-[57px]  w-[315px] left-[68px] top-8 rounded-b-[3px] rounded-t-[3px] '
          InputLabelProps={{
            style: inputStyles,
          }}
          style={containerStyles}
          {...formControl}
        />
        <button className='bg-[#E50914] hover:bg-[#C11119] text-white text-[24px] border-solid rounded-b-[3px] rounded-t-[3px]  h-[58px] w-[315px] mt-[60px] ml-[68px]' onClick={isLogin ? FormValidation : FormValidationName} > {isLogin ? "Sign In" : "Sign Up" } </button>
        <p className='text-[#E50914] font-body font-medium text-[18px] mt-[12px] ml-[70px]'>{Error}</p>
        <p className='text-[#E50914] font-body font-medium text-[18px] mt-[12px] ml-[70px]'>{ErrorFull}</p>
        <h1 className='h-[58px]  w-[315px] left-[68px] mt-[60px] ml-[68px] text-[#737373] font-body font-normal text-[16px]'>{isLogin ? "New to Netflix?":"Already Registered?"} <span className='underline underline-offset-2 cursor-pointer text-white' onClick={handler}>{isLogin ? "Sign up now" : " Sign in here"  }</span></h1>
        <h1 className='h-[58px]  w-[315px] left-[68px] mt-0 text-[#737373] font-body font-normal text-[13px] ml-[68px]'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='/' ><span className='text-[#0071eb] underline underline-offset-2'>Learn more.</span></a></h1>
        
      </form>
        { showMessage ? <div style={{ display: successMessage ? 'block' : 'none' }} className='text-[18px] pl-6 pt-3 h-[50px] w-[300px] text-black font-body absolute top-9  left-[1200px] bg-green-900 bg-opacity-[0.75]'>{successMessage}</div> : null}
        
      </div>
   
      {/* {footer} */}
      <div  className='bg-black opacity-[0.70] h-[355px] w-[100%] flex flex-row absolute top-[835px]'>
      <Footer/>
      </div>
    </div>
    <Header/>
    
    </>
  )
}

export default Login