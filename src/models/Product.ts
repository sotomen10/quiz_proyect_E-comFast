import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { User } from './user';

@Table({
    tableName: 'products',
    timestamps: true,
})
export class Product extends Model<Product> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    price!: number;

    @Column({
        type: DataType.STRING(500),
        allowNull: true,
    })
    description?: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;

    @BelongsTo(() => User)
    user!: User;
}