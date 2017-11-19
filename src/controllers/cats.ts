
import { Controller, Get, Post, Param, UseFilters } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { CatsService} from '../services/cats';
import { Cat } from '../services/intrefaces/cat';
import { ExceptionsFilter } from '../exceptions/exception';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Get('new/:name/:age/:breed')
  create(@Param() cat: Cat) {
    return this.catsService.create(cat);
  }

  @Get('all')
  findAll(){
    if (1)
      throw new Error('Forbidden')
    return this.catsService.findAll();
  }
}
