import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
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
  getOneNinjas(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjaService.getOneNinja(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  // POST /ninjas
  @Post()
  postNinjas(@Body(new ValidationPipe()) createNinjasDto: CreateNinjasDto) {
    return this.ninjaService.createNinja(createNinjasDto);
  }

  // PUT /ninjas/:id --> {...}
  @Put(':id')
  putNinjas(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNinjasDto: UpdateNinjasDto,
  ) {
    return this.ninjaService.updateNinja(id, updateNinjasDto);
  }

  // DELETE /ninjas/:id --> {...}
  @Delete(':id')
  deleteNinjas(@Param('id', ParseIntPipe) id: number) {
    return this.ninjaService.removeNinja(id);
  }
}
