export class CreateProductStockDto {
  product_id: number;
  location_id: number;
  quantity?: number | null;
  available_quantity?: number | null;
  reserved_quantity?: number | null;
  in_stock: boolean;
  qty_in_stock_by_supplier?: number | null;
  date_last_update?: Date | null;
}
