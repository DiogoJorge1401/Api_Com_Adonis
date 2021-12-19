import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  id: number;

  @column()
  name: string;

  @column()
  username: string;

  @column.dateTime({ autoCreate: true })
  createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  updatedAt: DateTime;
}
