import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum CLIENT_TYPE  {
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

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

