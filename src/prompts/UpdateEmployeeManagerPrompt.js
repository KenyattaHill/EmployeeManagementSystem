const inquirer = require('inquirer');

function buildQuestions({ employees }) {
  const employeeList = employees.map(employee => {
    return {
      name: `${employee.first_name}, ${employee.last_name}`,
      value: employee.id,
    }
  })
  return [
    {
      type: 'list',
      name: 'employee_id',
      message: 'Update the manager for which employee?',
      choices: employeeList
    },
    {
      type: 'list',
      name: 'manager_id',
      message: 'Select the manager.',
      choices: [{ name: 'None', value: 'null' }].concat(employeeList)
    },
  ]
}

const UpdateEmployeeManagerPrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = UpdateEmployeeManagerPrompt;