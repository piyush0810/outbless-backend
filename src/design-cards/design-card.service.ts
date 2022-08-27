import { Injectable } from '@nestjs/common';
import { Repository, Equal, Not } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { DesignCard } from '../entities/design-card';
@Injectable()
export class DesignCardService {
  constructor(
    @InjectRepository(DesignCard)
    private readonly designCardRepository: Repository<DesignCard>,
  ) {}

  async getDesignCards() {
    try {
      const designCard = await this.designCardRepository.find();
      return designCard;
    } catch (err) {
      console.log(err);
    }
  }
  async saveDesignCard(data: any) {
    try {
      const designCard = await this.designCardRepository.save(data);
      return designCard;
    } catch (err) {
      console.log(err);
    }
  }
  async deleteDesignCard(designCardId: string) {
    try {
      const designCard = await this.designCardRepository.delete(designCardId);

      return designCard;
    } catch (err) {
      console.log(err);
    }
  }
}
