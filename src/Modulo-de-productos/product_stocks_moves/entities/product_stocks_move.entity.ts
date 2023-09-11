import { ProductProduct } from 'src/Modulo-de-productos/product_products/entities/product_product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('product_stock_moves')
export class ProductStockMove {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductProduct, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductProduct;

  @Column({ type: 'int' })
  location_id: number;

  @Column({ type: 'int' })
  location_dest_id: number;

  @Column({ type: 'int', nullable: true })
  product_qty: number;

  @Column({ type: 'varchar', length: 255 })
  move_type: string;

  @Column({ type: 'int', nullable: true })
  picking_id: number;

  @Column({ type: 'varchar', length: 255 })
  state: string;

  @Column({ type: 'date', nullable: true })
  date_expected: Date;

  @Column({ type: 'date', nullable: true })
  date_done: Date;
}
