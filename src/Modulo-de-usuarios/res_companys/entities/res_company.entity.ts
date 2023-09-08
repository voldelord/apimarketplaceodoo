import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('res_companys')
export class ResCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  legal_name: string;

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

  /*@ManyToOne(() => State, (state) => state.companies)
  state: State;

  @ManyToOne(() => Country, (country) => country.companies)
  country: Country;*/

  @Column({ type: 'varchar', length: 255, nullable: true })
  website: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image: Blob;

  /*@ManyToOne(() => Currency, (currency) => currency.companies)
  currency: Currency;*/

  @Column({ type: 'varchar', length: 255, nullable: true })
  time_zone: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  lang: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  logo: Blob;

  @Column({ type: 'varchar', length: 255, nullable: true })
  company_registry_id: string;

  /*@ManyToOne(
    () => CompanyRegistryType,
    (companyRegistryType) => companyRegistryType.companies,
  )
  company_registry_type: CompanyRegistryType;*/

  @Column({ type: 'date', nullable: true })
  company_registry_issue_date: Date;

  @Column({ type: 'date', nullable: true })
  company_registry_expire_date: Date;

  @Column({ type: 'date', nullable: true })
  company_registry_url: string;

  /*@ManyToOne(() => State, (state) => state.company_registries)
  company_registry_state: State;

  @ManyToOne(() => Country, (country) => country.company_registries)
  company_registry_country: Country;

  @ManyToOne(() => LegalForm, (legalForm) => legalForm.companies)
  company_registry_legal_form: LegalForm;*/

  @Column({ type: 'varchar', length: 255, nullable: true })
  company_registry_capital: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  company_registry_number_employees: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  company_registry_website: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  company_registry_logo: Blob;

  @Column({ type: 'varchar', length: 255, nullable: true })
  company_registry_notes: string;

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
