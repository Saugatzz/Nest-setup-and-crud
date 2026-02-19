import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
