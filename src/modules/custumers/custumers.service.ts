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

  async create(createCustumerDto: CreateCustumerDto): Promise<Custumer> {
    // return 'This action adds a new custumer';
    const createdCustumer = new this.custumerModel(createCustumerDto);
    return await createdCustumer.save();
  }

  async findAll() {
    // return `This action returns all custumers`;
    console.log("get all custumer");
    return await this.custumerModel.find();
  }

  async findOne(id: string) {
    // return `This action returns a #${id} custumer`;
    console.log("custumer find" + id);
    return await this.custumerModel.find({ custumer: new Types.ObjectId(id) });
  }

  async update(id: string, updateCustumerDto: UpdateCustumerDto) {
    // return `This action updates a #${id} custumer`;
    console.log("custumer update - " + updateCustumerDto);
    return await this.custumerModel.updateOne(
      { custumer: new Types.ObjectId(id) },
      { $set: updateCustumerDto },
    );
  }

  async remove(id: string) {
    // return `This action removes a #${id} custumer`;
    console.log("custumer delete - " + id);
    return await this.custumerModel.deleteOne({ _id: id })
  }
}
