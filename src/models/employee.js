
class Employee {
    constructor(orm) {
        this.orm = orm;
    }

    getAll() {
        const query = `
        SELECT
        e.id,
        e.first_name,
        e.last_name,
        r.title,
        d.name as department,
        r.salary,
        m.first_name + ' ' + m.last_name as manager
        FROM employee e
        JOIN role r on e.role_id = r.id
        JOIN department d on r.department_id = d.id
        LEFT JOIN employee m on e.manager_id = m.id
        `
        return this.orm.query(query)
    }

    getAllByManager(managerId) {
        const query = `
        SELECT 
        e.id,
        e.first_name,
        e.last_name,
        r.title,
        d.name as department,
        r.salary,
        m.first_name + ' ' + m.last_name as manager
        FROM employee e
        JOIN role r on e.role_id = r.id
        JOIN department d on r.department_id = d.id
        LEFT JOIN employee m on e.manager_id = m.id
        WHERE e.manager_id = ${managerId}
        `;
        return this.orm.query(query);
    }

    getAllByDepartment(departmentId) {
        return this.orm.query(`
        SELECT e.* FROM employee e 
        JOIN role r on e.role_id = r.id
        WHERE r.department_id = ${departmentId}`);
    }

    create({ first_name, last_name, role_id, manager_id }) {

        const columns = ['first_name', 'last_name', 'role_id', 'manager_id'];
        const values = [`'${first_name}'`, `'${last_name}'`, role_id, manager_id];

        return this.orm.create('employee', columns, values)
    }

    update(id, column, value) {
        return this.orm.update('employee', id, column, value)
    }

    delete(id) {
        return this.orm.delete('employee', id)
    }
}

module.exports = Employee