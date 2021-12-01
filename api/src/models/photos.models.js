import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
const EntitySchema = require("typeorm").EntitySchema;

export const Photos = new EntitySchema({
  name: "photos", // Will use table name `category` as default behaviour.
  tableName: "photos", // Optional: Provide `tableName` property to override the default behaviour for table name.
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

/*@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}*/
