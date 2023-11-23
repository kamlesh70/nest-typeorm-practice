import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('banker')
export class Banker {

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
