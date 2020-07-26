const inquirer = require('inquirer');

function buildQuestions({ employees }) {
  return [
    {
      type: 'list',
      name: 'id',
      message: 'Select a manager to see their employees',
      choices: employees.map(employee => {
        return {
          name: `${employee.first_name}, ${employee.last_name}`,
          value: employee.id,
        }
      })
    },
  ]
}

const ChooseManagerPrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = ChooseManagerPrompt;