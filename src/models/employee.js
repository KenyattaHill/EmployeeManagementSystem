
class Employee {
    constructor(orm){
        this.orm = orm;
    }

    getAll() {
        return this.orm.getAll('employee')
    }

    getAllByManager(){
return this.orm.getAllByManager('role')
    }

    getAllByDepartment() {
return this.orm.getAllByDepartment('department')
    }

    create(name) {
return this.orm.create('employee', ['name'], [name])
    }

    update(id, name) {
return this.orm.update('employee', id, {name})
    }

    delete(id) {
return this.orm.delete('department', id)
    }
}

module.exports = Employee