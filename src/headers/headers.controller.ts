import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';

@Controller('headers')
export class HeadersController {
  constructor(private readonly headersService: HeadersService) {}

  @Post()
  create(@Body() createHeaderDto: CreateHeaderDto) {
    return this.headersService.create(createHeaderDto);
  }

  @Get()
  findAll() {
    return this.headersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.headersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeaderDto: UpdateHeaderDto) {
    return this.headersService.update(+id, updateHeaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.headersService.remove(id);
  }
}
