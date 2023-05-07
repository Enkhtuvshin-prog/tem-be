import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { About } from './entities/about.entity';

@Injectable()
export class AboutsService {
  constructor(@InjectModel('About') private readonly aboutModel:Model<About>){}

  create(createAboutDto: CreateAboutDto) {
    return this.aboutModel.create(createAboutDto);
  }

  findAll() {
    return this.aboutModel.find();
  }

  findOne(id: string) {
    return this.aboutModel.findOne();
  }

  update(id: string, updateAboutDto: UpdateAboutDto) {
    return this.aboutModel.findByIdAndUpdate(id, updateAboutDto, {new:true});
  }

  remove(id: string) {
    return this.aboutModel.findByIdAndDelete(id);
  }
}
