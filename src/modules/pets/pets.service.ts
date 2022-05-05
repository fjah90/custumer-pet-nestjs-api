/* eslint-disable prettier/prettier */
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

import { Pet, PetDocument } from '../../schemas/pet.schema';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    // return 'This action adds a new pet';
    const createdPet = new this.petModel(createPetDto);
    return await createdPet.save();
  }

  async findAll() {
    // return `This action returns all pets`;
    return await this.petModel.find();
  }

  async findOne(id: string) {
    // return `This action returns a #${id} pet`;
    return this.petModel.findOne({ pet: new Types.ObjectId(id) });
  }
  
  async findAllByCustumer(id: string) {
    // return `This action returns a pet by custumer #${custumerId} `;
    return await this.petModel.find({}).where('custumerId').equals(id);
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    // return `This action updates a #${id} pet`;
    return await this.petModel.updateOne(
      { pet: new Types.ObjectId(id) },
      { $set: updatePetDto },
    );
  }

  async remove(id: string) {
    // return `This action removes a #${id} pet`;
    return await this.petModel.deleteOne({ id_: id })
  }
}
7