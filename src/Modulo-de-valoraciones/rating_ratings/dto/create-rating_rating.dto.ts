export class CreateRatingRatingDto {
  res_model_id: number;
  res_id: number;
  parent_res_model_id?: number;
  parent_res_id?: number;
  rated_partner_id?: number;
  partner_id: number;
  message_id?: number;
  create_uid?: number;
  write_uid?: number;
  res_name: string;
  res_model: string;
  parent_res_name?: string;
  parent_res_model?: string;
  rating_text?: string;
  access_token?: string;
  feedback?: string;
  is_internal?: boolean;
  consumed?: boolean;
  create_date: Date;
  write_date: Date;
  rating?: number;
  publisher_id?: number;
  publisher_comment?: string;
  publisher_datetime?: Date;
}
