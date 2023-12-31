import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('clients')
export class ClientModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
