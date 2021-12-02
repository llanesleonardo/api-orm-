import { EntitySchema } from "typeorm";
/**
 * @EntitySchema  it is an instance of an object that creates a Table in the Database
 * @columns object tnat contains other objects. The main objective of this objects it to define attributes in the db (columns)
 * @name_ attribute that has to be use to call Schemas in Services
 * @tableName how this schema will name the table in the database
 */
const EntityS = new EntitySchema({
  name: "photos",
  tableName: "photos",
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
  relations: {
    albums: {
      target: "Album",
      type: "many-to-one",
      joinTable: true,
      cascade: true,
    },
  },
});

module.exports = EntityS;
