import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('product_products')
export class ProductProduct {
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
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  list_price: number;

  @Column({ type: 'int' })
  quantity_available: number;

  @Column({ type: 'int' })
  uom_id: number;

  @Column({ type: 'int' })
  taxes_id: number;

  @Column({ type: 'int' })
  stock_location_id: number;

  @Column({ type: 'text', nullable: true })
  attribute_line_ids: string;

  @Column({ type: 'int' })
  product_template_id: number;

  @Column({ type: 'tinyint' })
  sale_ok: boolean;

  @Column({ type: 'tinyint' })
  purchase_ok: boolean;

  @Column({ type: 'text', nullable: true })
  website_description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  meta_title: string;

  @Column({ type: 'text', nullable: true })
  meta_description: string;

  @Column({ type: 'tinyint' })
  tracking: boolean;

  @Column({ type: 'int' })
  route_id: number;

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
