const inquirer = require('inquirer');

function buildQuestions({ roles }) {
  return [
    {
      type: 'list',
      name: 'id',
      message: 'Which role do you want to remove?',
      choices: roles.map(role => {
        return {
          name: role.title,
          value: role.id,
        }
      })
    },
  ]
}

const RemoveRolePrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = RemoveRolePrompt;