import { Routes, Route } from "react-router-dom";
import Login from '../pages/auth/login/'
import Register from '../pages/auth/register/'

export default function Router() {
    return (
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
      </Routes>
    );
  }
  