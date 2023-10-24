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
import { UpdateNinjasDto } from './dto/update-ninjas.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {}
  // GET /ninjas?type=fast --> [...]
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks' | 'katana' | 'pen') {
    return this.ninjaService.getNinjas(weapon);
  }

  // GET /ninjas/:id --> {...}
  @Get(':id')
  getOneNinjas(@Param('id') id: string) {
    return this.ninjaService.getOneNinja(Number(id));
  }

  // POST /ninjas
  @Post()
  postNinjas(@Body() createNinjasDto: CreateNinjasDto) {
    return this.ninjaService.createNinja(createNinjasDto);
  }

  // PUT /ninjas/:id --> {...}
  @Put(':id')
  putNinjas(@Param('id') id: string, @Body() updateNinjasDto: UpdateNinjasDto) {
    return this.ninjaService.updateNinja(Number(id), updateNinjasDto);
  }

  // DELETE /ninjas/:id --> {...}
  @Delete(':id')
  deleteNinjas(@Param('id') id: string) {
    return this.ninjaService.removeNinja(Number(id));
  }
}
