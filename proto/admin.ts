/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'admin';

export interface Users {
  user: User[];
}

export interface Empty {}

export interface CreateUserDto {
  userName: string;
  email: string;
  accessLevel: string;
}

export interface User {
  id: string;
  userName: string;
  email: string;
  accessLevel: string;
}

export const ADMIN_PACKAGE_NAME = 'admin';

export interface AdminServiceClient {
  createUser(request: CreateUserDto): Observable<User>;

  listSoundStageUser(request: Empty): Observable<Users>;
}

export interface AdminServiceController {
  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

  listSoundStageUser(
    request: Empty,
  ): Promise<Users> | Observable<Users> | Users;
}

export function AdminServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['createUser', 'listSoundStageUser'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('AdminService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('AdminService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const ADMIN_SERVICE_NAME = 'AdminService';
