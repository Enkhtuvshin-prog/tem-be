import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Work } from './entities/work.entity';

@Injectable()
export class WorksService {
  constructor(@InjectModel('Work') private readonly workModel:Model<Work>){}
  create(createWorkDto: CreateWorkDto) {
    return this.workModel.create(createWorkDto);
  }

  findAll() {
    return this.workModel.find();
  }

  findOne(id: string) {
    return this.workModel.findById(id);
  }

  update(id: string, updateWorkDto: UpdateWorkDto) {
    return this.workModel.findByIdAndUpdate(id, updateWorkDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.workModel.findByIdAndDelete(id);
  }
}
