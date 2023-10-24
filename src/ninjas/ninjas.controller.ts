import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjasDto } from './dto/create-ninjas.dto';
import { NinjasService } from './ninjas.service';
@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}
  // GET /ninjas?type=fast --> [...]
  @Get()
  getNinjas(@Query('weapon') weapon: string, @Query('type') type: string) {
    console.log({ type });
    return this.ninjaService.getNinjas(weapon);
  }

  // GET /ninjas/:id --> {...}
  @Get(':id')
  getOneNinjas(@Param('id') id: string) {
    return { id };
  }

  // POST /ninjas
  @Post()
  postNinjas(@Body() body: CreateNinjasDto) {
    return {
      name: body.name,
    };
  }

  // PUT /ninjas/:id --> {...}
  @Put(':id')
  putNinjas(@Param('id') id: string) {
    return { id };
  }

  // DELETE /ninjas/:id --> {...}
  @Delete(':id')
  deleteNinjas(@Param('id') id: string) {
    return { id };
  }
}
