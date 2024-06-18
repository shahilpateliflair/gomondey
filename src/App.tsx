import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Ad from "./components/ad";
import Login from "./components/login";
import Main from "./components/Main";
import Register from "./components/Register";
import Notfound from "./components/Notfound";
import Home from "./components/Home";
import List from "./components/List";
import Order from "./components/Order";
import Counseling from "./components/Counseling";
import { SidebarProvider } from "./components/Sidebar";
import Add from "./components/Add-data";
function App() {
  return (
    <div className="App">
      <SidebarProvider> {/* Wrap your entire app with SidebarProvider */}
        <div>
          <Link to="/">Home</Link>
          <Link to="/header">Header</Link>
          <Link to="/ad">Ad</Link>
          <Link to="/login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/notfound">Not Found</Link>
          <Link to="/Order">Order</Link>
          <Link to="/Counseling">Counseling</Link>
          <Link to="/Add">Add</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/ad" element={<Ad />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Counseling" element={<Counseling />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="/list" element={<List />} />
          <Route path="/Add" element={<Add />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </SidebarProvider>
    </div>
  );
}

export default App;
