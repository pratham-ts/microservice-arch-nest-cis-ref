import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoundstageModule } from './soundstage/soundstage.module';
import ormConfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), SoundstageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
