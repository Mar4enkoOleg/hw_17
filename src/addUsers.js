// add data using script

const db = require('./db/models')

const users = [
    {
        full_name: 'Oleg Oleg',
        email: 'oleg@gmail.com',
        age: 22,
        role_id: 1,
        address_id: 1
    },
    {
        full_name: 'Oleg Oleg2',
        email: 'oleg2@gmail.com',
        age: 22,
        role_id: 2,
        address_id: 1
    },
]

const addData = async () => {
    await db.User.create(users[0])
    await db.User.create(users[1])
    await db.sequelize.close()
}
addData()