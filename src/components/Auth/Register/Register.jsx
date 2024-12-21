import { Link } from "react-router-dom";
import { LOGIN_ASIDE_IMAGE_URL } from "../../../constants/common";
import { useState } from "react";

import axiosInstance from "../../../utils/axios/config";
import InputBox from "../../base/InputBox/InputBox";
import Button from "../../base/Button/Button";
import LazyImage from "../../base/LazyImage/LazyImage";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerData = async () => {
    try {
      const res = await axiosInstance.post("/register", {
        username: "sonu12345",
        password: "12345",
      });

      console.log("res==>", res);
    } catch (err) {
      console.log("error:", err);
    }
  };

  const handleRegister = () => {
    console.log(userName, password);

    if (userName === "" || password === "" || confirmPassword === "") {
      return "This field is reqired!";
    }
    if (password !== confirmPassword) {
      return "Password and Confirm Password should be same!";
    }

    registerData();
  };

  return (
    <section>
      <section className="w-full h-screen flex justify-center items-center">
        <div className="h-[80%] w-[80%] flex flex-wrap  rounded-lg shadow-lg">
          {/* left image */}
          <div className="w-1/2 h-full">
            <LazyImage
              imageUrl={LOGIN_ASIDE_IMAGE_URL}
              alt="register_aside_image"
              imgStyles="w-full h-full rounded-lg"
            />
          </div>

          {/* Register Form */}
          <div className="w-1/2 p-4 bg-gray-200 flex justify-center items-center">
            <div className="shadow-lg p-4 bg-white rounded">
              <h1 className="text-center text-xl font-semibold">Register</h1>
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
              <InputBox
                inputType="password"
                placeholder="Confirm Password"
                onInputChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                labelText="Confirm Password"
              />

              <div className="text-center mt-4">
                <Button
                  text="Register"
                  btnStyle="bg-blue-500 rounded-xl w-full"
                  onClick={handleRegister}
                />
              </div>

              <div className="mt-4">
                <p>
                  Already User ?{" "}
                  <Link to="/login" className="text-blue-500 font-bold">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Register;
