#! /usr/bin/env node
const DepartmentModel = require('./models/department');
const connection = require('./services/connection');
const ORM = require('./services/orm');
const orm = new ORM();
const Employee = require('./models/employee');
const Role = require('./models/role')


const department = new DepartmentModel(orm);
const employee = new Employee(orm);
const role = new Role(orm);
role.create('4', ['name'], [10000], '1').then(results => {
    console.log(results)
    connection.end()
}).catch(error => {
    console.error(error)
    connection.end();
})

//console.log("we are step up")
