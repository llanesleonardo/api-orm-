import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Album } from "./albums.models";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  creation_date: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Album, (album) => album.photo, { onDelete: "SET NULL" })
  @JoinColumn()
  album: Album;
}
