import { Link } from "react-router-dom";
import { LOGIN_ASIDE_IMAGE_URL } from "../../../constants/common";
import { useState } from "react";

import axiosInstance from "../../../utils/axios/config.js";
import { useSelector } from "react-redux";
import InputBox from "../../base/InputBox/InputBox.jsx";
import Button from "../../base/Button/Button.jsx";
import LazyImage from "../../base/LazyImage/LazyImage.jsx";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { accessToken } = useSelector((store) => store);

  const fetchData = async () => {
    try {
      const res = await axiosInstance.post(
        "/login",
        {
          username: "sonu12345",
          password: "12345",
        },
        {
          token: accessToken,
        }
      );

      console.log("res==>", res);
    } catch (err) {
      console.log("error:", err);
    }
  };

  const handleLogin = () => {
    if (userName === "" || password === "") {
      return "This field is required!";
    }
    fetchData();
    console.log(userName, password);
  };
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="h-[80%] w-[80%] flex flex-wrap  rounded-lg shadow-lg">
        {/* left image */}
        <div className="w-1/2 h-full">
          <LazyImage
            imageUrl={LOGIN_ASIDE_IMAGE_URL}
            alt="login_aside_image"
            imgStyles="w-full h-full rounded-lg"
          />
        </div>

        {/* Login Form */}
        <div className="w-1/2 p-4 bg-gray-200 flex justify-center items-center">
          <div className="shadow-lg p-4 bg-white rounded">
            <h1 className="text-center text-xl font-semibold">Login</h1>
            <InputBox
              inputType="text"
              placeholder="Username"
              onInputChange={(e) => setUserName(e.target.value)}
              value={userName}
              labelText="Username"
            />
            <InputBox
              inputType="password"
              placeholder="Password"
              onInputChange={(e) => setPassword(e.target.value)}
              value={password}
              labelText="Password"
            />

            <div className="text-center mt-4">
              <Button
                text="Login"
                btnStyle="bg-blue-500 rounded-xl w-full"
                onClick={handleLogin}
              />
            </div>

            <div className="mt-4">
              <p>
                New User ?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 font-bold decoration-solid"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
