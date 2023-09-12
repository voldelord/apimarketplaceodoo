import { ProductPricelist } from 'src/Modulo-de-productos/product_pricelists/entities/product_pricelist.entity';
import { ResPartner } from 'src/Modulo-de-usuarios/res_partners/entities/res_partner.entity';
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

/*import { ResCurrency } from './res-currency.entity';
import { AccountPaymentTerm } from './account-payment-term.entity';*/

@Entity('sale_orders_templates')
export class SaleOrderTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  note: string;

  @ManyToOne(() => ResPartner, { nullable: false })
  @JoinColumn({ name: 'partner_id' })
  partner: ResPartner;

  @ManyToOne(() => ProductPricelist, { nullable: false })
  @JoinColumn({ name: 'pricelist_id' })
  pricelist: ProductPricelist;

  /*@ManyToOne(() => ResCurrency, { nullable: false })
  @JoinColumn({ name: 'currency_id' })
  currency: ResCurrency;*/

  /*@ManyToOne(() => AccountPaymentTerm, { nullable: false })
  @JoinColumn({ name: 'payment_term_id' })
  paymentTerm: AccountPaymentTerm;*/

  @Column({ type: 'json', nullable: false })
  order_line_ids: any[];

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
