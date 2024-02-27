import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  ADMIN_SERVICE_NAME,
  AdminServiceClient,
  CreateUserDto,
} from 'proto/admin';

@Injectable()
export class AppService implements OnModuleInit {
  private adminServiceClient: AdminServiceClient;
  constructor(@Inject('admin') private clientGrpc: ClientGrpc) {}

  onModuleInit() {
    this.adminServiceClient =
      this.clientGrpc.getService<AdminServiceClient>(ADMIN_SERVICE_NAME);
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.adminServiceClient.createUser(createUserDto).toPromise();
  }

  async getUsers() {
    return await this.adminServiceClient.listSoundStageUser({}).toPromise();
  }
}
