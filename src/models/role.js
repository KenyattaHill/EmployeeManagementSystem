

class Role {
    constructor(orm){
        this.orm = orm
    }
    getAll(){
        return this.orm.getAll('role');
    }

    create(id, name, salary, department_id){
        return this.orm.create('role', id [name], [salary], [department_id])
    }

    update(id, name){
        return this.orm.update('role', id, {name})
    }

    delete(id){
        return this.orm.delete('role', id)
    }
}

module.exports = Role