export class UpdateProductPricelistItemDto {
  pricelist_id?: number;
  product_id?: number;
  min_quantity?: number | null;
  price?: number | null;
  discount?: number | null;
  margin?: number | null;
  effective_date?: Date | null;
  expiration_date?: Date | null;
}
