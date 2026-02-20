import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { blog } from './blog.entity';

@Entity('category')
export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "boolean" })
  hasParent: boolean;

  @Column({ type: "varchar" })
  slug: string;

  @Column({ type: "int", nullable: true })
  parentId?: number;
  @Column({type: "varchar", nullable: true })
  parentName?: string;

  @Column({ type: "int" })
  displayOrder?: number;
  @OneToMany(() => blog, blog => blog.category)
  blogs: blog[];
}
