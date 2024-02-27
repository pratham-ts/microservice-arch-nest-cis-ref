import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, User } from 'proto/admin';
import { Repository } from 'typeorm';
import { tblUsers } from './entities/soundstage.entity';

@Injectable()
export class SoundstageService {
  constructor(
    @Inject('notification') private notificationService: ClientProxy,
    @InjectRepository(tblUsers)
    private soundStageRepository: Repository<tblUsers>,
  ) {}

  createUser(@Payload() createUserDto: CreateUserDto) {
    setTimeout(() => {
      this.notificationService.emit({ cmd: 'user-added' }, createUserDto),
        console.log('sent');
    }, 2000);

    return {
      id: JSON.stringify(Math.ceil(Math.random() * 100)),
      ...createUserDto,
    } as User;
  }

  async listSoundStageUser() {
    const users = (await this.soundStageRepository
      .createQueryBuilder('user')
      .select('user.userId', 'id')
      .addSelect('user.username', 'userName')
      .addSelect('user.email', 'email')
      .addSelect('user.accessLevel', 'accessLevel')
      .where('user.accessLevel = :accessLevel', { accessLevel: 0 })
      .getRawMany()) as unknown as Array<User>;

    return { user: users };
  }
}
