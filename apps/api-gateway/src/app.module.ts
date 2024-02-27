import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthGuard } from './auth/guards/auth.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'admin',
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, '../admin.proto'),
          package: 'admin',
        },
      },
    ]),
    JwtModule,
  ],
  controllers: [AppController],
  providers: [{ provide: 'APP_GUARD', useClass: AuthGuard }, AppService],
})
export class AppModule {}
