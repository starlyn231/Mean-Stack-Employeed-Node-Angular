const Employee = require("../models/employee");

const employeeCtrl = {};

employeeCtrl.getEmployees = async(req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployee = async(req, res) => {
    const newemployee = new Employee(req.body);
    try {
        await newemployee.save();
        res.json({ message: "Employee created" });
    } catch (error) {
        console.log(error);
        next();
    }
};
employeeCtrl.getEmployee = async(req, res, next) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
};

employeeCtrl.editEmployee = async(req, res, next) => {
    const { id } = req.params;
    await Employee.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Employee Updated" });
};

employeeCtrl.deleteEmployee = async(req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({ status: "Employee Deleted" });
};

module.exports = employeeCtrl;