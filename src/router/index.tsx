import { Routes, Route } from "react-router-dom";
import Login from '../pages/auth/login/'
import Register from '../pages/auth/register/'
import Layout from '../pages/layout/'

export default function Router() {
    return (
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/home" element={<Layout />}/>
      </Routes>
    );
  }
  