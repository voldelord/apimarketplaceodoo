export class UpdateResPartnerDto {
  name?: string;
  company_name?: string;
  vat?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  website?: string;
  image?: Buffer;
  customer?: boolean;
  supplier?: boolean;
  employee?: boolean;
  child_ids?: number[];
  is_company?: boolean;
  function?: string;
  title?: string;
  birthday?: Date;
  gender?: string;
  notes?: string;
}
