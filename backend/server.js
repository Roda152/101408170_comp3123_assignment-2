const express = require('express');
const app = express();
const port = 5000;


let employees = [
    { id: 1, name: 'John Doe', position: 'Developer', salary: 50000 },
    { id: 2, name: 'Jane Doe', position: 'Manager', salary: 60000 },
    { id: 3, name: 'Alice Smith', position: 'Engineer', salary: 70000 }
];


app.use(express.json());


app.delete('/api/v1/emp/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params.id);

    
    const employeeIndex = employees.findIndex(emp => emp.id === employeeId);
    
    if (employeeIndex === -1) {
        return res.status(404).json({ message: 'Employee not found' });
    }

   
    employees.splice(employeeIndex, 1);
    
    
    res.status(200).json({ message: `Employee with ID ${employeeId} deleted successfully` });
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
