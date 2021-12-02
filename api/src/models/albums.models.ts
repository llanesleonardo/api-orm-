import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
