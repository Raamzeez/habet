import Knex from 'knex'

exports.up = function (knex: Knex) {
	return knex.schema
		.createTable('users', (table) => {
			table.increments('id')
			table.string('firstName').notNullable()
			table.string('lastName').notNullable()
			table.string('email').notNullable()
			table.string('password').notNullable()
			table.boolean('isActive').notNullable()
		})
		// .createTable('habits', (table) => {})
}

exports.down = function (knex: Knex) {
	return knex.schema.dropTableIfExists('habits').dropTableIfExists('users')
}
