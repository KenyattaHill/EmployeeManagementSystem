

class Department {
    constructor(orm) {
        this.orm = orm
    }
    getAll() {
        return this.orm.getAll('department');
    }

    create(name) {
        return this.orm.create('department', ['name'], [`'${name}'`])
    }

    update(id, name) {
        return this.orm.update('department', id, 'name', name)
    }

    delete(id) {
        return this.orm.delete('department', id)
    }
}

module.exports = Department