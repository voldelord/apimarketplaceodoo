import { ProductAttribute } from 'src/Modulo-de-productos/product_atributes/entities/product_atribute.entity';
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

@Entity('product_attribute_values')
export class ProductAttributeValue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductProduct, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductProduct;

  @ManyToOne(() => ProductAttribute, { nullable: false })
  @JoinColumn({ name: 'attribute_id' })
  attribute: ProductAttribute;

  @Column({ type: 'varchar', length: 255 })
  value: string;

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
