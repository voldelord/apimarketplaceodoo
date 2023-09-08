import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('product_templates')
export class ProductTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image: string;

  @Column({ type: 'tinyint' })
  website_published: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  list_price: number;

  @Column({ type: 'text', nullable: true })
  attribute_line_ids: string;

  @Column({ type: 'text', nullable: true })
  product_variant_ids: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  default_code: string;

  @Column({ type: 'tinyint' })
  tracking: boolean;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    select: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    select: false,
  })
  deletedAt: Date;
}
