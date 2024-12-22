import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ASIDE_IMAGE_URL } from "../../../constants/common";
import { useEffect, useState } from "react";

import axiosInstance from "../../../utils/axios/config.js";
import { useDispatch } from "react-redux";
import InputBox from "../../base/InputBox/InputBox.jsx";
import Button from "../../base/Button/Button.jsx";
import LazyImage from "../../base/LazyImage/LazyImage.jsx";
import { AuthAction } from "../../../redux/actions/AuthAction.js";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      if (error) {
        setError(null);
      }
    }, 5000);

    return () => clearTimeout(id);
  }, [error]);

  const login = async () => {
    try {
      const res = await axiosInstance.post("/login", {
        email: userName,
        password,
      });

      dispatch(AuthAction(res?.data?.token));
      navigate("/");
      setError(null);
    } catch (err) {
      if (err?.status === 400 || err?.response?.data?.error) {
        setError(err?.response?.data?.error);
      }
    }

    setUserName("");
    setPassword("");
  };

  const handleLogin = () => {
    if (userName === "" || password === "") {
      setError("All field are required!");
      return;
    }
    login();
  };
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="h-[80%] w-[80%] flex flex-wrap rounded-lg shadow-lg">
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
            {error && <p className="mt-2 text-red-500">{error}</p>}
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
