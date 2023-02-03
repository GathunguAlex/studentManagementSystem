import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import AddStudent from './components/AddStudent';
import Login from './components/Login'
import Navbar from './components/Navbar'
import ProfileDisplay from './components/ProfileDisplay'
import SignUP from './components/SignUp'
import StudentPhoto from './components/StudentPhoto'



function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Login />
      <ProfileDisplay />
      <StudentPhoto />
      <AddStudent />
      <SignUP />
    </>
  );
}

export default App;
