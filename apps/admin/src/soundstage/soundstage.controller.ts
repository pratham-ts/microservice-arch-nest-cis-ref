import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AdminServiceController, CreateUserDto, User } from 'proto/admin';
import { SoundstageService } from './soundstage.service';

@Controller()
export class SoundstageController implements AdminServiceController {
  constructor(private readonly soundstageService: SoundstageService) {}

  @GrpcMethod('AdminService', 'createUser')
  createUser(createUserDto: CreateUserDto): User {
    return this.soundstageService.createUser(createUserDto);
  }

  @GrpcMethod('AdminService', 'listSoundStageUser')
  listSoundStageUser() {
    return this.soundstageService.listSoundStageUser();
  }
}
