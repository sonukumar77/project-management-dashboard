import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Error from "./pages/Error";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const storeData = useSelector((store) => store);

  console.log("stt=>", storeData);
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/notFound" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/error" element={<Error />} />
        <Route path="/notFound" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
