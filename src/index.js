#! /usr/bin/env node
const figlet = require('figlet');
const cTable = require('console.table');
const ORM = require('./services/orm');
const { Role, Employee, Department } = require('./models');
const {
    MainMenu,
    NewRolePrompt,
    RemoveRolePrompt,
    NewEmployeePrompt,
    NewDepartmentPrompt,
    ChooseManagerPrompt,
    RemoveEmployeePrompt,
    ChooseDepartmentPrompt,
    RemoveDepartmentPrompt,
    UpdateEmployeeManagerPrompt,
    UpdateEmployeeRolePrompt
} = require('./prompts');

const orm = new ORM();
const employeeModel = new Employee(orm);
const departmentModel = new Department(orm);
const roleModel = new Role(orm);

async function main() {
    //console.log(figlet.fontsSync());
    console.log(figlet.textSync('Employee Manager', {
        font: 'Star Wars',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 125,
        whitespaceBreak: true
    }));

    let menuSelection = {};
    while (menuSelection.menu !== 'exit') {

        const employees = await employeeModel.getAll();
        const departments = await departmentModel.getAll();
        const roles = await roleModel.getAll();

        const promptDependencies = {
            employees,
            departments,
            roles,
        }

        console.log('\n')
        menuSelection = await MainMenu(promptDependencies);
        switch (menuSelection.menu) {
            case 'viewAllEmployees':
                console.table(employees)
                break;
            case 'viewAllEmployeesByManager':
                const manager = await ChooseManagerPrompt(promptDependencies);
                console.table(await employeeModel.getAllByManager(manager.id))
                break;
            case 'viewAllEmployeesByDepartment':
                const department = await ChooseDepartmentPrompt(promptDependencies);
                console.table(await employeeModel.getAllByDepartment(department.id))
                break;
            case 'addEmployee':
                const newEmployee = await NewEmployeePrompt(promptDependencies)
                console.log('\nEmployee was added!')
                await employeeModel.create(newEmployee);
                break;
            case 'removeEmployee':
                const employeeToRemove = await RemoveEmployeePrompt(promptDependencies)
                await employeeModel.delete(employeeToRemove.id);
                console.log('\nEmployee was removed!')
                break;
            case 'updateEmployeeRole':
                const updatedRole = await UpdateEmployeeRolePrompt(promptDependencies)
                await employeeModel.update(updatedRole.employee_id, 'role_id', updatedRole.role_id)
                console.log('\nEmployee was updated!')
                break;
            case 'updateEmployeeManager':
                const updatedManager = await UpdateEmployeeManagerPrompt(promptDependencies)
                await employeeModel.update(updatedManager.employee_id, 'manager_id', updatedManager.manager_id)
                console.log('\nEmployee was updated!')
                break;
            case 'viewAllRoles':
                console.table(roles)
                break;
            case 'addRole':
                const newRole = await NewRolePrompt(promptDependencies)
                await roleModel.create(newRole);
                console.log('\nRole was added!')
                break;
            case 'removeRole':
                const roleToRemove = await RemoveRolePrompt(promptDependencies)
                await roleModel.delete(roleToRemove.id)
                console.log('\nRole was removed!')
                break;
            case 'viewAllDepartments':
                console.table(departments)
                break;
            case 'addDepartment':
                const newDepartment = await NewDepartmentPrompt(promptDependencies)
                await departmentModel.create(newDepartment.name);
                console.log('\nDepartment was added!')
                break;
            case 'removeDepartment':
                const departmentToRemove = await RemoveDepartmentPrompt(promptDependencies)
                await departmentModel.delete(departmentToRemove.id)
                console.log('\nDepartment was remove!')
                break;
        }
    }
}
main()
//console.log("we are step up")

