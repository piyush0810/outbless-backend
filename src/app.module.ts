import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesignCardModule } from './design-cards/design-card.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'mvghvefwysryne',
      password:
        'd2f9b998f2c10e991a22a848cea5ec7227672a97e3cbaba924c36b3949b324f0',
      database: 'di1cn0ipsrann',
      host: 'ec2-54-159-175-38.compute-1.amazonaws.com',
      ssl: true,
      entities: ['dist/entities/*.js'],
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    DesignCardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
