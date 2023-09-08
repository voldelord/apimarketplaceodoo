import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('res_users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  login: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'int', nullable: true })
  company_id: number;

  @Column({ type: 'simple-array', nullable: true })
  groups_id: number[];

  @Column({ type: 'tinyint', default: 1 })
  active: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  signature: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tz: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  language: string;

  // Consider how to handle LONGBLOB data (e.g., using Buffer)
  @Column({ type: 'longblob', nullable: true })
  avatar: Buffer;

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
