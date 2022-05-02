/* eslint-disable prettier/prettier */
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Injectable } from '@nestjs/common';
import { CreateCustumerDto } from './dto/create-custumer.dto';
import { UpdateCustumerDto } from './dto/update-custumer.dto';

import { Custumer, CustumerDocument } from '../../schemas/custumer.schema';

@Injectable()
export class CustumersService {
  constructor(
    @InjectModel(Custumer.name) private custumerModel: Model<CustumerDocument>,
  ) {}

  create(createCustumerDto: CreateCustumerDto): Promise<Custumer> {
    // return 'This action adds a new custumer';
    const createdCustumer = new this.custumerModel(createCustumerDto);
    return createdCustumer.save();
  }

  findAll() {
    // return `This action returns all custumers`;
    return this.custumerModel.find();
  }

  findOne(id: string) {
    // return `This action returns a #${id} custumer`;
    return this.custumerModel.findOne({ custumer: new Types.ObjectId(id) });
  }

  update(id: string, updateCustumerDto: UpdateCustumerDto) {
    // return `This action updates a #${id} custumer`;
    console.log(updateCustumerDto);
    return this.custumerModel.updateOne(
      { custumer: new Types.ObjectId(id) },
      { $set: updateCustumerDto },
    );
  }

  remove(id: string) {
    // return `This action removes a #${id} custumer`;
    return this.custumerModel.findOneAndDelete({ id: id })
  }
}
