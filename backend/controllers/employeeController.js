const Employee = require('../models/Employee');

const addEmployee = async (req, res) => {
  try {
    const { name, position, department, salary } = req.body;
    const employee = new Employee({ name, position, department, salary });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ msg: 'Employee not found' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { name, position, department, salary } = req.body;
    const employee = await Employee.findByIdAndUpdate(req.params.id, { name, position, department, salary }, { new: true });
    if (!employee) return res.status(404).json({ msg: 'Employee not found' });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ msg: 'Employee not found' });
    res.status(200).json({ msg: 'Employee deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports = { addEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee };
