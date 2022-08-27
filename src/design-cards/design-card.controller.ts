import {
  Body,
  Controller,
  Request,
  Get,
  Query,
  Post,
  UseInterceptors,
  Delete,
} from '@nestjs/common';

import { Request as Req } from 'express';
import { DesignCard } from 'src/entities/design-card';
import { DesignCardService } from './design-card.service';
@Controller('design-card')
export class DesignCardController {
  constructor(private readonly designCardService: DesignCardService) {}

  @Get('/designCards')
  async getAllAvailableCompanies(@Query() query) {
    const response = await this.designCardService.getDesignCards();
    return response;
  }

  @Post('/designCards')
  async saveDesignCard(@Request() req: Req, @Body() body: any) {
    const response = await this.designCardService.saveDesignCard(body);
    return response;
  }

  @Delete('/designCards')
  async deleteDesignCard(@Request() req: Req, @Body() body: any,@Query() query) {
    const response = await this.designCardService.deleteDesignCard(query.id);
    return response;
  }
}
