const Employee = require('../models/Employee')
// show the list of index
const index = (req,res,next)=>{
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            message : 'An error occured'
        })
    })
}
// showing a specific employee by a specific ID
const show = (req,res,next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message : 'An error occured'
        })
    })
}
// adding a new employee
const store = (req,res,next)=>{
    let employee = new Employee({
        name :req.body.name,
        designation:req.body.designation,
        email : req.body.email,
        Phone : req.body.Phone,
        age : req.body.age
    })
    employee.save()
    .then(response=>{
        res.json({
            message : 'Employee added Successfully'
        })
    })
    .catch(err=>{
        res.json({
            message : 'An error occured '
        })
    })
}
//updating an employee

const update = (req,res,next)=>{
    let employeeID = req.body.employeeID
    
    let updatedData = {
        name : req.body.name,
        designation : req.body.designation,
        email : req.body.email,
        Phone : req.body.Phone,
        age : req.body.age,
    }
    Employee.findByIdAndUpdate(employeeID,{$set:updatedData})
    .then(()=>{
        res.json({
            message : 'Employee updated successfull'
        })

    })
    .catch(err=>{
        res.json({
            message : 'An error occured'
        })
    })
}
//Deleting an employee
const destroy= (req,res,next)=>{
    let employeeID = re.body.employeeID
    Employee.findOneAndRemove(employeeID)
    .then(()=>{
        res.json({
            message : 'Employee deleted succesffully'
        })
    })
    .catch(()=>{
        res.json({
           message : 'An error occured' 
        })
    })
}
module.exports = {
    index , show , store , update , destroy
}