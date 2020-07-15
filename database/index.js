const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'CoarsenorseHorse',
        database: 'meal_planning_db',
    }
})

module.exports = knex;