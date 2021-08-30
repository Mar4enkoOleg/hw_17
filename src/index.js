const db = require('./db/models')

const start = async () => {
    try {
        await db.sequelize.authenticate()
        // await db.sequelize.sync()
        await db.sequelize.close()
    } catch (err) {
        console.error(err);
    }
}
start()

// queryInterface docs
// https://sequelize.org/master/class/lib/dialects/abstract/query-interface.js~QueryInterface.html