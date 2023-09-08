export class CreateResGroupDto {
  name: string;
  category_id: number | null;
  users_id: number[] | null;
  modules_ids: number[] | null;
  action_id: number | null;
}
