import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('blog')
export class user {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  userName: string;

 
  @Column({type: "varchar" })
  password?: string;

  @Column({ type: "varchar" })
  email?: string;
}
