export class CreateSaleOrderLineDto {
  order_id: number;
  product_id: number;
  product_uom_qty: number;
  price_unit: number;
  discount: number;
  tax_id?: number;
  price_subtotal: number;
  price_total: number;
}
