export class UpdateProductPricelistDto {
  name?: string;
  currency_id?: number;
  version?: number;
  active?: boolean;
  website_published?: boolean;
  item_ids?: string | null;
}
