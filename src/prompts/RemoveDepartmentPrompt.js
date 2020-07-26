const inquirer = require('inquirer');

function buildQuestions({ departments }) {
  return [
    {
      type: 'list',
      name: 'id',
      message: 'Which department do you want to remove?',
      choices: departments.map(department => {
        return {
          name: department.name,
          value: department.id,
        }
      })
    },
  ]
}

const RemoveRolePrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = RemoveRolePrompt;