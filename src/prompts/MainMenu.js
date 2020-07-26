const inquirer = require('inquirer');

function buildQuestions({ employees, roles, departments }) {
  let menuChoices = [
    {
      name: 'View All Employees',
      value: 'viewAllEmployees'
    },
    {
      name: 'View All Employees By Manager',
      value: 'viewAllEmployeesByManager'
    },
    {
      name: 'View All Employees By Department',
      value: 'viewAllEmployeesByDepartment'
    },
    {
      name: 'Add Employee',
      value: 'addEmployee'
    },
    {
      name: 'Remove Employee',
      value: 'removeEmployee'
    },
    {
      name: 'Update Employee Role',
      value: 'updateEmployeeRole'
    },
    {
      name: 'Update Employee Manager',
      value: 'updateEmployeeManager'
    },
    {
      name: 'View All Roles',
      value: 'viewAllRoles'
    },
    {
      name: 'Add Role',
      value: 'addRole'
    },
    {
      name: 'Remove Role',
      value: 'removeRole'
    },
    {
      name: 'View All Departments',
      value: 'viewAllDepartments'
    },
    {
      name: 'Add Department',
      value: 'addDepartment'
    },
    {
      name: 'Remove Department',
      value: 'removeDepartment'
    },
    {
      name: 'Exit',
      value: 'exit'
    },
  ]

  if (departments.length === 0) {
    const choicesToRemove = [
      'addRole',
      'viewAllDepartments',
      'removeDepartment'
    ]
    menuChoices = menuChoices.filter(item => !choicesToRemove.includes(item.value))
  }

  if (roles.length === 0) {
    const choicesToRemove = [
      'addEmployee',
      'viewAllRoles',
      'removeRole',
    ]
    menuChoices = menuChoices.filter(item => !choicesToRemove.includes(item.value))
  }

  if (employees.length === 0) {
    const choicesToRemove = [
      'viewAllEmployees',
      'viewAllEmployeesByManager',
      'viewAllEmployeesByDepartment',
      'removeEmployee',
      'updateEmployeeManager',
      'updateEmployeeRole'
    ]
    menuChoices = menuChoices.filter(item => !choicesToRemove.includes(item.value))
  }

  return [
    {
      type: 'list',
      name: 'menu',
      message: 'What would you like to do?',
      choices: menuChoices
    },
  ]
}

const MainMenu = (dependencies) => inquirer.prompt(buildQuestions(dependencies));

module.exports = MainMenu;