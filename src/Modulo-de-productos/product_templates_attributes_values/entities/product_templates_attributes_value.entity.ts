import { ProductAttribute } from 'src/Modulo-de-productos/product_atributes/entities/product_atribute.entity';
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

@Entity('product_templates_attributes_values')
export class ProductTemplateAttributeValue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductAttribute, { nullable: false })
  @JoinColumn({ name: 'attribute_id' })
  attribute: ProductAttribute;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  value: string;

  @Column({ type: 'int' })
  position: number;

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
