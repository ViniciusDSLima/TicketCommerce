import "reflect-metadata"
import {DataSource} from "typeorm";
import {ClientModel} from "../../../application/Client/typeorm/client.model";
import { CreateTableClient1704011286418 } from '../migrations/1704011286418-CreateTableClient';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "ticket",
  entities: [ClientModel],
  migrations: [CreateTableClient1704011286418],
})

AppDataSource.initialize().then(() => {
  console.log('Rodou no banco')
}).catch((error) => console.log(error))
