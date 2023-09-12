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
/*import { ResPartner } from './res-partner.entity';
import { SaleOrderLine } from './sale-order-line.entity';
import { ProductPricelist } from './product-pricelist.entity';
import { ResCurrency } from './res-currency.entity';
import { AccountPaymentTerm } from './account-payment-term.entity';
import { StockPicking } from './stock-picking.entity';*/

@Entity('sale_order')
export class SaleOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'datetime', nullable: false })
  date_order: Date;

  /*@ManyToOne(() => ResPartner, { nullable: false })
  @JoinColumn({ name: 'partner_id' })
  partner: ResPartner;

  @ManyToOne(() => ResPartner, { nullable: true })
  @JoinColumn({ name: 'partner_invoice_id' })
  partner_invoice: ResPartner;

  @ManyToOne(() => ResPartner, { nullable: true })
  @JoinColumn({ name: 'partner_shipping_id' })
  partner_shipping: ResPartner;

  @ManyToOne(() => SaleOrderLine, { nullable: false })
  @JoinColumn({ name: 'order_line_id' })
  order_line: SaleOrderLine;

  @ManyToOne(() => ProductPricelist, { nullable: false })
  @JoinColumn({ name: 'pricelist_id' })
  pricelist: ProductPricelist;

  @ManyToOne(() => ResCurrency, { nullable: false })
  @JoinColumn({ name: 'currency_id' })
  currency: ResCurrency;

  @ManyToOne(() => AccountPaymentTerm, { nullable: false })
  @JoinColumn({ name: 'payment_term_id' })
  payment_term: AccountPaymentTerm;*/

  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: false })
  amount_untaxed: number;

  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: false })
  amount_tax: number;

  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: false })
  amount_total: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  state: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  invoice_status: string;

  /*@ManyToOne(() => StockPicking, { nullable: false })
  @JoinColumn({ name: 'picking_ids' })
  picking: StockPicking;*/

  @Column({ type: 'text', nullable: true })
  shipping_address: string;

  @Column({ type: 'text', nullable: true })
  note: string;

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
