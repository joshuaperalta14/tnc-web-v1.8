import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Events from "./routes/Events";
import About from "./routes/About";
import Support from "./routes/Support";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import UpdatePasswordForm from './components/UpdatePasswordForm';
import ContactPage from './components/ContactPage';
import ContactPageSubmit from './components/ContactPageSubmit';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from "./pages/Inventory";
import Suppliers from './pages/Suppliers';
import Expenses from './pages/Expenses';
import Projects from './pages/Projects';
import Report from './pages/Report';
import Inbox from './pages/Inbox.js';
import Documents from './pages/Documents';
import ContactSupport from './pages/ContactSupport';
import Settings from './pages/Settings';

import { Route, Routes} from "react-router-dom";

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/about" element={<About />} />
    <Route path="/support" element={<Support />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<SignupForm />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
    <Route path="/updatepassword" element={<UpdatePasswordForm />} />
    <Route path="/contactsubmit" element={<ContactPageSubmit />} />
    <Route path="/sidebar" element={<Sidebar />} />
    <Route path="/dashboard"element={<Dashboard/>}/>
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/suppliers"element={<Suppliers/>}/>
    <Route path="/expenses"element={<Expenses/>}/>
    <Route path="/projects"element={<Projects/>}/>
    <Route path="/report"element={<Report/>}/>
    <Route path="/inbox"element={<Inbox/>}/>
    <Route path="/documents"element={<Documents/>}/>
    <Route path="/contactsupport"element={<ContactSupport/>}/>
    <Route path="/settings"element={<Settings/>}/>
  </Routes>
  </>
  );
}

export default App;
