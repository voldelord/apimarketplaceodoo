import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('res_partners')
export class ResPartner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  company_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  vat: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  street: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  city: string;

  /*@ManyToOne(() => ResState, { nullable: true })
  @JoinColumn({ name: 'state_id' })
  state: ResState;

  @ManyToOne(() => ResCountry, { nullable: true })
  @JoinColumn({ name: 'country_id' })
  country: ResCountry;*/

  @Column({ type: 'varchar', length: 255, nullable: true })
  website: string;

  @Column({ type: 'blob', nullable: true })
  image: Buffer;

  @Column({ type: 'boolean', default: false })
  customer: boolean;

  @Column({ type: 'boolean', default: false })
  supplier: boolean;

  @Column({ type: 'boolean', default: false })
  employee: boolean;

  /*@ManyToOne(() => ResPartnerCategory, { nullable: true })
  @JoinColumn({ name: 'category_id' })
  category: ResPartnerCategory;

  @ManyToOne(() => ResPartner, { nullable: true })
  @JoinColumn({ name: 'parent_id' })
  parent: ResPartner;*/

  @Column({ type: 'simple-array', nullable: true })
  child_ids: number[];

  @Column({ type: 'boolean', default: false })
  is_company: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  function: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  title: string;

  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  gender: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

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
