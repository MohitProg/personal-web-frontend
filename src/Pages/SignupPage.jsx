import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Postuserdata } from "../Redux/Slice/userSlice";
import { Signupuser } from "../Redux/Api/userApi";
import toast from "react-hot-toast";
const SignupPage = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();

    dispatch(Signupuser(user))
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          Navigate("/verifyotp");
          setuser({
            name: "",
            email: "",
            password: "",
          });
        } else {
          toast.error(res.message);
        }
      });
  };

  return (
    <div className="w-full h-screen bg-[#090D1F] flex items-center justify-center p-5">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        {/* <!-- Heading --> */}
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Create New Account{" "}
        </h2>

        {/* <!-- Form --> */}
        <form onSubmit={HandleSubmit} className="mt-6 space-y-4">
          {/* name input  */}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              User Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user?.name}
              onChange={(e) => setuser({ ...user, name: e.target.value })}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <!-- Email Input --> */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <!-- Password Input --> */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user?.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
              name="password"
              required
              className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <!-- Login Button --> */}
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-[#5941C6] rounded-lg hover:bg-purple-600 transition duration-200"
          >
            Signup
          </button>

          {/* <!-- Additional Links --> */}
          <div className="flex items-center justify-between mt-4 text-sm">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
