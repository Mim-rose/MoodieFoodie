
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import BurgerUp from "../assets/home/Bouncing Burger.json";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ✅ Loading state added
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      setSuccessMessage("");
      return;
    }

    // Confirm password match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setSuccessMessage("");
      return;
    }

    // ✅ Firebase create user
    setIsLoading(true); // ✅ Start loading
    createUser(formData.email, formData.password)
      .then((result) => {
        console.log("Firebase user created:", result.user);
        return updateUserProfile({ displayName: formData.name });
      })
      .then(() => {
        setSuccessMessage("Successfully signed up!");
        navigate("/", { replace: true });
        setErrorMessage("");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setSuccessMessage("");
      })
      .finally(() => {
        setIsLoading(false); // ✅ End loading
      });

     
  };
  const handleGoogleSignUp = () => {
  signInWithGoogle()
    .then((result) => {
      console.log("Google user signed up:", result.user);
      setSuccessMessage("Signed up with Google!");
      navigate("/", { replace: true });
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
};


  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-50 px-4 py-12">
      {/* ✅ Sign Up Form Box */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-[420px] md:mr-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
            autoComplete="name"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
            autoComplete="email"
            required
          />

          {/* Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              autoComplete="new-password"
              required
            />
            <span
              className="absolute right-3 top-3 text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              autoComplete="new-password"
              required
            />
            <span
              className="absolute right-3 top-3 text-gray-600 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded transition ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center mt-4 text-gray-700">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>

        {/* Google Sign In Button */}
        <div className="mt-4 text-center">
          <button onClick={handleGoogleSignUp}      className="w-full py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2">
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
        </div>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-600 text-center mt-4">{successMessage}</p>
        )}

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-600 text-center mt-4">{errorMessage}</p>
        )}
      </div>

      {/* ✅ Lottie Animation Section */}
      <div className="md:w-[400px] w-[300px] mt-8 md:mt-0">
        <Lottie animationData={BurgerUp} loop={true} />
      </div>
    </div>
  );
};

export default SignUp;

