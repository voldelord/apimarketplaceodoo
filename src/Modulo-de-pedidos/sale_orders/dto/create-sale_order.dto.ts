export class CreateSaleOrderDto {
  name: string;
  date_order: Date;
  partner_id: number;
  partner_invoice_id?: number;
  partner_shipping_id?: number;
  order_line_id: number;
  pricelist_id: number;
  currency_id: number;
  payment_term_id: number;
  amount_untaxed: number;
  amount_tax: number;
  amount_total: number;
  state: string;
  invoice_status: string;
  picking_ids: number;
  shipping_address?: string;
  note?: string;
}
