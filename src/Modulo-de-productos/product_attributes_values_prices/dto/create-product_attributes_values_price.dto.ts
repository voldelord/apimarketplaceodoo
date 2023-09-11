export class CreateProductAttributeValuePriceDto {
  product_template_attribute_value_id: number;
  pricelist_id: number;
  price: number;
  currency_id: number;
  website_published: boolean;
}
