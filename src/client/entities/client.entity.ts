import { Transaction } from "src/transection/entities/transection.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum CLIENT_TYPE  {
    REGULAR = 'REGULAR'
}

@Entity('client')
export class Client {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    first_name: string

    @Column({
        nullable: true
    })
    last_name: string

    @Column({
        nullable: false,
        unique: true
    })
    email: string

    @Column({
        type: "enum",
        enum: CLIENT_TYPE,
        default: CLIENT_TYPE.REGULAR

    })
    client_type: CLIENT_TYPE

    @Column({
        type: 'simple-json',
        nullable: true
    })
    additional_data: {
        address: string,
        phone_number: string
    }

    @OneToMany(
        () => Transaction,
        transaction => transaction.client
    )
    transactions: Transaction[]

    @Column({
        length: 12
    })
    card_number: string;

    @Column({
        type: 'numeric'
    })
    balance: number;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

