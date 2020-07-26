//const connection = require("./connection.js");
const sql = require('msnodesqlv8');

const database = (queryString) => new Promise((resolve, reject) => {
    const connectionString = 'server=.;Database=employee_trackerdb;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}'
    sql.query(connectionString, queryString, (err, results)=>{
        if(err){
            reject(err)
        }
        resolve(results);
    })
});

class orm {
    constructor(){}
    getAll(table) {
        return database(`SELECT * FROM ${table}`)
    }

    query(query) {
        return database(query)
    }

    create(table, columns, values) {
        const query = `INSERT INTO ${table} (${columns.join()}) VALUES (${values.join()})`;
        //console.log('[CREATE]',query)
        return database(query);
    }

    update(table, id, column, value){
        const query = `UPDATE ${table} SET ${column} = ${value} WHERE id = ${id}`;
        //console.log('[UPDATE]',query)
        return database(query);
    }

    delete(table, id){
        const query = `DELETE FROM ${table} WHERE id = ${id}`;
        return database(query)
    }
}
module.exports = orm