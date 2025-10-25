import React, { useEffect, useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import BurgerIn from "../assets/home/Bouncing Burger.json";
import { FcGoogle } from "react-icons/fc";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const SignIn = () => {
  const captchaRef = useRef();
  const [disabled, setDisabled] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";

  const {signIn, signInWithGoogle, resetPassword} = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  
  useEffect(() => {
  if (location.state?.from?.pathname && !successMessage) {
    setErrorMessage(`Please sign in to continue to ${location.state.from.pathname}`);
  }
}, [location.state, successMessage]);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // You can add actual sign-in logic here
     signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      setSuccessMessage("Login successful");
      setErrorMessage(""); // clear previous errors
      navigate(from, { replace: true }); // ⬅️ go back to where user wanted to go
      
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("User not found. Please sign up first.");
        navigate("/signup");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Wrong password. Please try again.");
      } else {
        setErrorMessage(error.message);
      }
      setSuccessMessage("");
    });


  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      setSuccessMessage("Captcha validated successfully!");
      setErrorMessage("");
    } else {
      setDisabled(true);
      setErrorMessage("Captcha validation failed. Please try again.");
      setSuccessMessage("");
    }
  };
   const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((result) => {
      console.log("Google user :", result.user);
      navigate("/", {replace: true});
    } )
    .catch((error) => {
      setErrorMessage(error.message);

    } );
   };

   const handleResetPassword = (e) => {
  e.preventDefault();
  const email = e.target.email.value;

  resetPassword(email)
    .then(() => {
      setSuccessMessage("Password reset email sent! Check your inbox.");
      setErrorMessage("");
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        setErrorMessage("No account found with that email.");
      } else {
        setErrorMessage(error.message);
      }
      setSuccessMessage("");
    });
}




  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-screen bg-gray-50 px-4 py-12 gap-8">
      {/* Form Section */}
      <div className="flex justify-end">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            {showForgotPassword ? "Reset Password" : "Sign In"}
          </h2>

          {/* Conditional Messages */}
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
              {successMessage}
            </div>
          )}

          {showForgotPassword ? (
            <form  onSubmit={handleResetPassword} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <button
                type="submit"
                
                className="w-full bg-indigo-600 text-white py-3 rounded-lg"
              >
                Send Reset Link
              </button>
              <button
                type="button"
                className="w-full mt-2 text-indigo-600 hover:underline"
                onClick={() => setShowForgotPassword(false)}
              >
                Back to Login
              </button>
            </form>
          ) : (
            <>
              <form className="space-y-4" onSubmit={handleSignIn}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={disabled}
                  className={`w-full py-3 rounded-lg text-white ${
                    disabled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 transition duration-200"
                  }`}
                >
                  Sign In
                </button>
              </form>

              <div className="mt-4 text-center space-y-2">
                <button
                  className="text-indigo-600 hover:underline"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password?
                </button>

                <div className="mt-4 space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    <LoadCanvasTemplate />
                  </label>

                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    placeholder="Type the text above"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <button
                    type="button"
                    onClick={handleValidateCaptcha}
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
                  >
                    Validate
                  </button>
                </div>

                <button onClick={handleGoogleSignIn} className="w-full py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2">
                  <FcGoogle className="text-xl" />
                  Sign in with Google
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Animation Section */}
      <div className="flex justify-start">
        <div className="w-full max-w-md">
          <Lottie animationData={BurgerIn} loop />
        </div>
      </div>
    </div>
  );
};

export default SignIn;