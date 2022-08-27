import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesignCardController } from './design-card.controller';
import { DesignCard } from '../entities/design-card';
import { DesignCardService } from './design-card.service';


@Module({
  imports: [TypeOrmModule.forFeature([DesignCard])],
  controllers: [DesignCardController],
  providers: [DesignCardService],
  exports: [DesignCardService],
})
export class DesignCardModule {}
