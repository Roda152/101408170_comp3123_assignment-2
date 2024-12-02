const express = require('express');
const { addEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const router = express.Router();

router.post('/employees', addEmployee);
router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

module.exports = router;
