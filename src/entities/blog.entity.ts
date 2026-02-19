import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity('blog')
export class blog {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;


  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId' })
  category?: Category;

 
  @Column({type: "varchar" })
  description?: string;

  @Column({ type: "varchar" })
  author?: string;
}
