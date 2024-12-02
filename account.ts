import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Account {
    @PrimaryColumn("uuid")
    id: string;

    @Column({ type: 'timestamp', nullable: true, default: null })
    lastLoginAt: Date | null

    @CreateDateColumn()
    createdAt: Date
}