import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('product_attributes')
export class ProductAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'tinyint' })
  required: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  default_value: string | null;

  @Column({ type: 'tinyint' })
  website_published: boolean;
}
