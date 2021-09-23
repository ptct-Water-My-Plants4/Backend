
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl=>{
        tbl.increments('user_id')
        tbl.string('username', 128).notNullable().unique()
        tbl.string('phoneNumber').notNullable()
        tbl.string('password').notNullable()
    })

    .createTable('plants', tbl =>{
        tbl.increments('plant_id')
        tbl.string('nickname', 128).notNullable()
        tbl.string('species', 128)
        tbl.string('h2oFrequency', 128).notNullable() //perhaps a dropdown? 'daily, weekly, monthly, etc
        tbl.string('image', 128)
        tbl.integer('user_id')
            .references('user_id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('plants')
        .dropTableIfExists('users')
};
