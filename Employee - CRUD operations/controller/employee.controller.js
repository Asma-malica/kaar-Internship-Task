import Employee from "../models/employee.model.js"
// create employee
const createEmployee = async(req,res)=>{
    try{
        const employee = await Employee.create(req.body);
        res.status(200).json(employee);
    }
    catch(error){
        res.status(500).json({message : error.message})
        }
    }
//retrieve all employee details
const getAllEmployee = async(req,res)=>{
    try{
        const employee = await Employee.find();
        res.status(200).json(employee);
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}
// get a employee details using id
const getEmployee = async(req,res)=>{
    try{
        const { id } = req.params;
        const employee = await Employee.findById(id);
        res.status(200).json(employee)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}
// PUT - Replaces the whole object [ Updating all fields of an employee]
// update employee detail 
const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByIdAndUpdate(id, req.body, {
            // new: true -> When using findByIdAndUpdate() or similar functions, it returns the updated document instead of the original.
            // Default: false (returns the old document unless , new: true).
            new: true, 
            overwrite: true, //  replaces the whole document
            // runValidators: true -> Ensures Mongoose schema validations are applied during update operations (like required fields, type checks, etc.).
            // Default: false (Mongoose skips validations on updates unless you enable this).
            runValidators: true
        });
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// PATCH - updates only specific fields	[ Changing just the salary of an employee ]
// partial update employee detail 
const partialUpdateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// delete a employee detail
const deleteEmployee = async(req,res)=>{
    try{
        const {id} = req.params;
        const employee = await Employee.findByIdAndDelete(id);
        if(!employee){
            return res.status(404).json({message : "Employee not found"})
        }
        res.status(200).json({message : "Employee detail deleted successfully"})
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}
export{
    createEmployee,getAllEmployee,getEmployee ,updateEmployee ,partialUpdateEmployee ,deleteEmployee
}



