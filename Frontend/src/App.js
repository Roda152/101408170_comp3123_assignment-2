import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import EmployeeDetails from './pages/EmployeeDetails';
import UpdateEmployee from './pages/UpdateEmployee';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/employees/update/:id" element={<UpdateEmployee />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
