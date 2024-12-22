import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Error from "./pages/Error";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
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
  );
}

export default App;
