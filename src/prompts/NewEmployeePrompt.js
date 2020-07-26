const inquirer = require('inquirer');

function buildQuestions({ employees, roles }) {
  return [
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the employee\'s first name?'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the employee\'s last name?'
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'What is the employee\'s role?',
      choices: roles.map(role => {
        return {
          name: role.title,
          value: role.id,
        }
      })
    },
    {
      type: 'list',
      name: 'manager_id',
      message: 'Who is the employee\'s manager?',
      choices: [{ name: 'None', value: 'null' }].concat(employees.map(employee => {
        return {
          name: `${employee.first_name}, ${employee.last_name}`,
          value: employee.id,
        }
      }))
    },
  ]
}

const NewEmployeePrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = NewEmployeePrompt;