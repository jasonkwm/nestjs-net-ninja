import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas() {
    return [];
  }

  @Get(':id')
  getOneNinjas(@Param('id') id: string) {
    return { id };
  }

  @Post()
  postNinjas() {
    return {};
  }

  @Put()
  putNinjas() {
    return {};
  }

  @Delete()
  deleteNinjas() {
    return {};
  }
}
