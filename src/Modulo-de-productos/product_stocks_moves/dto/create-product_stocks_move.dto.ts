export class CreateProductStockMoveDto {
  product_id: number;
  location_id: number;
  location_dest_id: number;
  product_qty?: number | null;
  move_type: string;
  picking_id?: number | null;
  state: string;
  date_expected?: Date | null;
  date_done?: Date | null;
}
