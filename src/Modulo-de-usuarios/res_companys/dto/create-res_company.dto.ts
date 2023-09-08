export class CreateResCompanyDto {
  name: string;
  legal_name?: string;
  vat?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  website?: string;
  image?: Buffer;
  time_zone?: string;
  lang?: string;
  logo?: Buffer;
  company_registry_id?: string;
  company_registry_issue_date?: Date;
  company_registry_expire_date?: Date;
  company_registry_url?: string;
  company_registry_capital?: number;
  company_registry_number_employees?: number;
  company_registry_website?: string;
  company_registry_logo?: Buffer;
  company_registry_notes?: string;
}
