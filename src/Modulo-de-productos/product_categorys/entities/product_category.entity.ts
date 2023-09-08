import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('product_categories')
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => ProductCategory, { nullable: true })
  @JoinColumn({ name: 'parent_id' })
  parent: ProductCategory;

  @Column({ type: 'tinyint' })
  website_published: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image: string;

  @Column({ type: 'int', default: 0 })
  product_count: number;
}
