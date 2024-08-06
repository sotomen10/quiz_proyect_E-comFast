import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Product } from './product';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({
      type: DataType.INTEGER,
  })
  id!: number;

  @Column({
      type: DataType.STRING(200),
      allowNull: false,
  })
  name!: string;

  @Column({
      type: DataType.STRING(200),
      allowNull: false,
      unique: true,
  })
  email!: string;

  @Column({
      type: DataType.STRING(200),
      allowNull: false,
  })
  password!: string;

  @HasMany(() => Product)
  products?: Product[];
}