const inquirer = require('inquirer');

function buildQuestions({ employees, roles }) {
  return [
    {
      type: 'list',
      name: 'employee_id',
      message: 'Update the role for which employee?',
      choices: employees.map(employee => {
        return {
          name: `${employee.first_name}, ${employee.last_name}`,
          value: employee.id,
        }
      })
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'Select the role.',
      choices: roles.map(role => {
        return {
          name: role.title,
          value: role.id,
        }
      })
    },
  ]
}

const UpdateEmployeeRolePrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = UpdateEmployeeRolePrompt;