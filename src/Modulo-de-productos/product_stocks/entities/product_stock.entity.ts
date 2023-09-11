import { ProductProduct } from 'src/Modulo-de-productos/product_products/entities/product_product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('product_stocks')
export class ProductStock {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductProduct, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductProduct;

  @Column({ type: 'int' })
  location_id: number;

  @Column({ type: 'int', nullable: true })
  quantity: number;

  @Column({ type: 'int', nullable: true })
  available_quantity: number;

  @Column({ type: 'int', nullable: true })
  reserved_quantity: number;

  @Column({ type: 'tinyint' })
  in_stock: boolean;

  @Column({ type: 'int', nullable: true })
  qty_in_stock_by_supplier: number;

  @Column({ type: 'date', nullable: true })
  date_last_update: Date;

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
