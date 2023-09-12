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
/*import { ResModel } from './res-model.entity';*/

@Entity('rating_ratings')
export class RatingRating {
  @PrimaryGeneratedColumn()
  id: number;

  /*@ManyToOne(() => ResModel, { nullable: false })
  @JoinColumn({ name: 'res_model_id' })
  resModel: ResModel;*/

  @Column({ type: 'int', nullable: false })
  res_id: number;

  /*@ManyToOne(() => ResModel, { nullable: true })
  @JoinColumn({ name: 'parent_res_model_id' })
  parentResModel: ResModel;*/

  @Column({ type: 'int', nullable: true })
  parent_res_id: number;

  @ManyToOne(() => ResPartner, { nullable: true })
  @JoinColumn({ name: 'rated_partner_id' })
  ratedPartner: ResPartner;

  @ManyToOne(() => ResPartner, { nullable: false })
  @JoinColumn({ name: 'partner_id' })
  partner: ResPartner;

  @Column({ type: 'int', nullable: true })
  message_id: number;

  @Column({ type: 'int', nullable: true })
  create_uid: number;

  @Column({ type: 'int', nullable: true })
  write_uid: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  res_name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  res_model: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  parent_res_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  parent_res_model: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  rating_text: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  access_token: string;

  @Column({ type: 'text', nullable: true })
  feedback: string;

  @Column({ type: 'boolean', default: false })
  is_internal: boolean;

  @Column({ type: 'boolean', default: false })
  consumed: boolean;

  @Column({ type: 'datetime', nullable: false })
  create_date: Date;

  @Column({ type: 'datetime', nullable: false })
  write_date: Date;

  @Column({ type: 'double precision', nullable: true })
  rating: number;

  @Column({ type: 'int', nullable: true })
  publisher_id: number;

  @Column({ type: 'text', nullable: true })
  publisher_comment: string;

  @Column({ type: 'datetime', nullable: true })
  publisher_datetime: Date;

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
