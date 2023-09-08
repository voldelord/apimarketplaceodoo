export class CreateProductTemplateDto {
  name: string;
  description?: string;
  type: string;
  image?: string;
  website_published: boolean;
  list_price: number;
  attribute_line_ids?: string;
  product_variant_ids?: string;
  default_code?: string;
  tracking: boolean;
}
