export class CreateProductAttributeDto {
  name: string;
  type: string;
  required: boolean;
  default_value?: string | null;
  website_published: boolean;
}
