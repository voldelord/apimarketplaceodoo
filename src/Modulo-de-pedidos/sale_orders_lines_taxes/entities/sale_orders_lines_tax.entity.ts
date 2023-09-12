import { SaleOrderLine } from 'src/Modulo-de-pedidos/sale_orders_lines/entities/sale_orders_line.entity';
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
/*import { AccountTax } from './account-tax.entity';*/

@Entity('sale_orders_lines_taxes')
export class SaleOrderLineTax {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SaleOrderLine, { nullable: false })
  @JoinColumn({ name: 'order_line_id' })
  orderLine: SaleOrderLine;

  /*@ManyToOne(() => AccountTax, { nullable: false })
  @JoinColumn({ name: 'tax_id' })
  tax: AccountTax;*/

  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: false })
  amount: number;

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
