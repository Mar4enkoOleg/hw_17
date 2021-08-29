const db = require('./db/models')

const start = async () => {
    try {
        await db.sequelize.authenticate() // auth and create db
        await db.sequelize.close()
    } catch (err) {
        console.error(err);
    }
}
start()