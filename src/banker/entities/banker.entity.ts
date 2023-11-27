import { Client } from "src/client/entities/client.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @ManyToMany(
        () => Client
    )
    @JoinTable({
        name: "bankers_clients",
        joinColumn: {
            name: 'banker',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'client',
            referencedColumnName: 'id'
        }
    })
    client: Client[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
