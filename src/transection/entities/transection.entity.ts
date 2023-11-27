import { Client } from "src/client/entities/client.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('transaction')
export class Transaction {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'numeric'
    })
    amount: number;

    @ManyToOne(
        () => Client,
        client => client.transactions
    )
    @JoinColumn({
        name: 'client_id'
    })
    client: Client;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
