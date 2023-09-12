export class CreateSaleOrderTemplateDto {
  name: string;
  note: string;
  partner_id: number;
  pricelist_id: number;
  currency_id: number;
  payment_term_id: number;
  order_line_ids: any[];
}
