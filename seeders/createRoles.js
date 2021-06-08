// Not really a seeder, just a temp placeholder

const db = require('../models')

db.roles.create({
    name: "admin",
    roleType: 1
})

db.roles.create({
    name: "default",
    roleType: 2
})