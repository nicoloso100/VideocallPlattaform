exports.up = function(knex, Promise) {
  return knex.schema.createTable("client_users", t => {
    t.string("username")
      .notNull()
      .primary();
    t.string("password_digest").notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("client_users");
};
