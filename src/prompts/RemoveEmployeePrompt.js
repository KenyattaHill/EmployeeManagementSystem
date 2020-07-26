const inquirer = require('inquirer');

function buildQuestions({ employees }) {
  return [
    {
      type: 'list',
      name: 'id',
      message: 'Which employee do you want to remove?',
      choices: employees.map(employee => {
        return {
          name: `${employee.first_name}, ${employee.last_name}`,
          value: employee.id,
        }
      })
    },
  ]
}

const RemoveEmployeePrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = RemoveEmployeePrompt;