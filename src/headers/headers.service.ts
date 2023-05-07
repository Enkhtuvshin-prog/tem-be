import { Injectable } from '@nestjs/common';
import { CreateHeaderDto } from './dto/create-header.dto';
import { UpdateHeaderDto } from './dto/update-header.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Header } from './entities/header.entity';

@Injectable()
export class HeadersService {
  constructor(@InjectModel('Header') private readonly headerModel:Model<Header> ){}
  async create(createHeaderDto: CreateHeaderDto) {
    return await this.headerModel.create(createHeaderDto);
  }

  async findAll() {
    return await this.headerModel.find()
  }

  async findOne(id: number) {
    return await this.headerModel.findOne()
  }

  async update(id: number, updateHeaderDto: UpdateHeaderDto) {
    return await this.headerModel.findByIdAndUpdate(id, updateHeaderDto, {new:true})
  }

  async remove(id: string) {
    return await this.headerModel.findOneAndDelete();
  }
}
