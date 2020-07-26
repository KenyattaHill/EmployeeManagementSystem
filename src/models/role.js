

class Role {
    constructor(orm) {
        this.orm = orm
    }
    getAll() {
        const query = `
        SELECT 
        r.id,
        r.title,
        r.salary,
        d.name as department
        from role r
        JOIN department d on r.department_id = d.id
        `
        return this.orm.query(query);
    }

    create({ title, salary, department_id }) {
        const columns = ['title', 'salary', 'department_id'];
        const values = [`'${title}'`, salary, department_id];
        return this.orm.create('role', columns, values)
    }

    update(id, column, value) {
        return this.orm.update('role', id, column, value)
    }

    delete(id) {
        return this.orm.delete('role', id)
    }
}

module.exports = Role