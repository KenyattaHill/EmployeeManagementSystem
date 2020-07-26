const inquirer = require('inquirer');

function buildQuestions({ roles, departments }) {
  return [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the role?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary of the role?'
    },
    {
      type: 'list',
      name: 'department_id',
      message: 'What is the department of the role?',
      choices: departments.map(department => {
        return {
          name: department.name,
          value: department.id,
        }
      })
    }
  ]
}

const NewRolePrompt = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = NewRolePrompt;