export class CreateProductCategoryDto {
  name: string;
  description?: string;
  parent_id?: number;
  website_published: boolean;
  image?: string;
  product_count?: number;
}
