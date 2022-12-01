import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Accessory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    accessory_name: string;
    @Column()
    price: number;
    @Column()
    brand: string;
    @Column()
    description: string;
}