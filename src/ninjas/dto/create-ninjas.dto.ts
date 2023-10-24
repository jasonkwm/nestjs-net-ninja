import { MinLength, IsAlpha, IsEnum } from 'class-validator';

export class CreateNinjasDto {
  id: number;

  @MinLength(3)
  @IsAlpha()
  name: string;

  @IsEnum(['stars', 'nunchucks', 'katana', 'pen'])
  weapon: 'stars' | 'nunchucks' | 'katana' | 'pen';
}
