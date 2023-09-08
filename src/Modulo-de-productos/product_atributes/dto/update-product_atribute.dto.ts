export class UpdateProductAttributeDto {
  name?: string;
  type?: string;
  required?: boolean;
  default_value?: string | null;
  website_published?: boolean;
}
