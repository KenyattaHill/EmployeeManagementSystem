const inquirer = require('inquirer');

function buildQuestions() {
  return [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the department?'
    }
  ]
}

const NewDepartmentPrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = NewDepartmentPrompt;