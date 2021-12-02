import { EntitySchema } from "typeorm";
/**
 * @EntitySchema  it is an instance of an object that creates a Table in the Database
 * @columns object tnat contains other objects. The main objective of this objects it to define attributes in the db (columns)
 * @name_ attribute that has to be use to call Schemas in Services
 * @tableName how this schema will name the table in the database
 */

module.exports = new EntitySchema({
  name: "Album", // Will use table name `Album` as default behaviour.
  tableName: "albums", // Optional: Provide `tableName` property to override the default behaviour for table name.
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
});
