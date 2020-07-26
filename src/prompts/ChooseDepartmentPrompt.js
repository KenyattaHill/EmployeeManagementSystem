const inquirer = require('inquirer');

function buildQuestions({ departments }) {
  return [
    {
      type: 'list',
      name: 'id',
      message: 'Select a department to see employees',
      choices: departments.map(department => {
        return {
          name: department.name,
          value: department.id,
        }
      })
    },
  ]
}

const ChooseDepartmentPrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = ChooseDepartmentPrompt;