
exports.up = function(knex) {
    return knex.schema.createTable('users',function(table){
          table.increments();
          table.string('name').notNullable();
          table.string('password').notNullable();
          table.string('rule');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  