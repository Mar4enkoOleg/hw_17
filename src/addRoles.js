//add data using script

const db = require('./db/models')

const roles = ['superadmin', 'admin', 'user']

const addRoles = async () => {
    roles.map(async role => {
        await db.Role.create({ name: role })
        await db.sequelize.close()
    })
}
addRoles()