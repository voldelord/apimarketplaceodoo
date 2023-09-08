export class UpdateProductProductDto {
  name?: string;
  description?: string;
  type?: string;
  image?: string;
  website_published?: boolean;
  price?: number;
  list_price?: number;
  quantity_available?: number;
  uom_id?: number;
  taxes_id?: number;
  stock_location_id?: number;
  attribute_line_ids?: string;
  product_template_id?: number;
  sale_ok?: boolean;
  purchase_ok?: boolean;
  website_description?: string;
  meta_title?: string;
  meta_description?: string;
  tracking?: boolean;
  route_id?: number;
}
