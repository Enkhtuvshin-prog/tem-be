import { Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {
  constructor(@InjectModel('Offer') private readonly offerModel:Model<Offer>){}
  create(createOfferDto: CreateOfferDto) {
    return  this.offerModel.create(createOfferDto);
  }

  findAll() {
    return this.offerModel.find();
  }

  findOne(id: string) {
    return this.offerModel.findOne();
  }

  update(id: string, updateOfferDto: UpdateOfferDto) {
    return  this.offerModel.findByIdAndUpdate(id, updateOfferDto, {new:true});
  }

  remove(id: string) {
    return this.offerModel.findByIdAndDelete(id);
  }
}
