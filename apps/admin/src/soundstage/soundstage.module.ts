import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoundstageController } from './soundstage.controller';
import { SoundstageService } from './soundstage.service';
import { tblUsers } from './entities/soundstage.entity';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'notification',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://admin:admin@localhost:5672`],
          queue: 'Notification Queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    TypeOrmModule.forFeature([tblUsers]),
  ],
  controllers: [SoundstageController],
  providers: [SoundstageService],
})
export class SoundstageModule {}
