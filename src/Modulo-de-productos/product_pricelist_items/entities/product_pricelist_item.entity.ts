import { ProductPricelist } from 'src/Modulo-de-productos/product_pricelists/entities/product_pricelist.entity';
import { ProductProduct } from 'src/Modulo-de-productos/product_products/entities/product_product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('product_pricelist_items')
export class ProductPricelistItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductPricelist, { nullable: false })
  @JoinColumn({ name: 'pricelist_id' })
  pricelist: ProductPricelist;

  @ManyToOne(() => ProductProduct, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductProduct;

  @Column({ type: 'int', nullable: true })
  min_quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  discount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  margin: number;

  @Column({ type: 'date', nullable: true })
  effective_date: Date;

  @Column({ type: 'date', nullable: true })
  expiration_date: Date;

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
