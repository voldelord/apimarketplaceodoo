import { ProductPricelist } from 'src/Modulo-de-productos/product_pricelists/entities/product_pricelist.entity';
import { ProductTemplateAttributeValue } from 'src/Modulo-de-productos/product_templates_attributes_values/entities/product_templates_attributes_value.entity';
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

@Entity('product_attributes_values_prices')
export class ProductAttributeValuePrice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductTemplateAttributeValue, { nullable: false })
  @JoinColumn({ name: 'product_template_attribute_value_id' })
  productTemplateAttributeValue: ProductTemplateAttributeValue;

  @ManyToOne(() => ProductPricelist, { nullable: false })
  @JoinColumn({ name: 'pricelist_id' })
  pricelist: ProductPricelist;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int' })
  currency_id: number;

  @Column({ type: 'tinyint' })
  website_published: boolean;

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
