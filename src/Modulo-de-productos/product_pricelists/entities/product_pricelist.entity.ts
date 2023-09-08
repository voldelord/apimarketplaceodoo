import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('product_pricelists')
export class ProductPricelist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  currency_id: number;

  @Column({ type: 'int' })
  version: number;

  @Column({ type: 'tinyint' })
  active: boolean;

  @Column({ type: 'tinyint' })
  website_published: boolean;

  @Column({ type: 'text', nullable: true })
  item_ids: string;
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
