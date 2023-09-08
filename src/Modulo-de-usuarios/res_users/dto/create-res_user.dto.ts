export class CreateUserDto {
  name: string;
  login: string;
  password: string;
  email: string;
  company_id: number | null;
  groups_id: number[] | null;
  active: boolean;
  signature: string | null;
  tz: string | null;
  language: string | null;
  avatar: Buffer | null;
}
