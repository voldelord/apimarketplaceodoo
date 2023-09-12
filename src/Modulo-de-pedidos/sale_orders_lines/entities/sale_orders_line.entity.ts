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
/*import { ProductUom } from './product-uom.entity';*/
/*import { AccountTax } from './account-tax.entity';*/
import { SaleOrder } from 'src/Modulo-de-pedidos/sale_orders/entities/sale_order.entity';
import { ProductProduct } from 'src/Modulo-de-productos/product_products/entities/product_product.entity';

@Entity('sale_orders_lines')
export class SaleOrderLine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SaleOrder, { nullable: false })
  @JoinColumn({ name: 'order_id' })
  order: SaleOrder;

  @ManyToOne(() => ProductProduct, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductProduct;

  /*@ManyToOne(() => ProductUom, { nullable: false })
  @JoinColumn({ name: 'product_uom_qty' })
  product_uom: ProductUom;*/

  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: false })
  product_uom_qty: number;

  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: false })
  price_unit: number;

  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: false })
  discount: number;

  /*@ManyToOne(() => AccountTax, { nullable: true })
  @JoinColumn({ name: 'tax_id' })
  tax: AccountTax;*/

  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: false })
  price_subtotal: number;

  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: false })
  price_total: number;

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
