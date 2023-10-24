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
@Controller('ninjas')
export class NinjasController {
  // GET /ninjas?type=fast --> [...]
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
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
