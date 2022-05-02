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

  create(createPetDto: CreatePetDto): Promise<Pet> {
    // return 'This action adds a new pet';
    const createdPet = new this.petModel(createPetDto);
    return createdPet.save();
  }

  findAll() {
    // return `This action returns all pets`;
    return this.petModel.find();
  }

  findOne(id: string) {
    // return `This action returns a #${id} pet`;
    return this.petModel.findOne({ pet: new Types.ObjectId(id) });
  }

  update(id: string, updatePetDto: UpdatePetDto) {
    // return `This action updates a #${id} pet`;
    return this.petModel.updateOne(
      { pet: new Types.ObjectId(id) },
      { $set: updatePetDto },
    );
  }

  remove(id: string) {
    // return `This action removes a #${id} pet`;
    return this.petModel.findOneAndDelete({ id: id })
  }
}
