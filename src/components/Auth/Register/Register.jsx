import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ASIDE_IMAGE_URL } from "../../../constants/common";
import { useEffect, useState } from "react";

import axiosInstance from "../../../utils/axios/config";
import InputBox from "../../base/InputBox/InputBox";
import Button from "../../base/Button/Button";
import LazyImage from "../../base/LazyImage/LazyImage";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => {
      if (error) {
        setError(null);
      }

      if (message) {
        navigate("/login");
        setMessage(null);
      }
    }, 5000);

    return () => clearTimeout(id);
  }, [error, message, navigate]);

  const register = async () => {
    try {
      const response = await axiosInstance.post("/register", {
        email: userName,
        password,
      });
      if (response.status === 200) {
        setError(null);
        setMessage(`Registration successful!`);
      }
    } catch (err) {
      if (err?.status === 400 || err?.response?.data?.error) {
        setError(err?.response?.data?.error);
      }
    }

    setUserName("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleRegister = () => {
    if (userName === "" || password === "" || confirmPassword === "") {
      setError("All field are reqired!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password and Confirm Password should be same!");
      return;
    }

    register();
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

              {message && <p className="mt-2 text-green-500">{message}</p>}
              {error && <p className="mt-2 text-red-500">{error}</p>}

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
