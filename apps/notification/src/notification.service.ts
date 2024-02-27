import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'proto/admin';

@Injectable()
export class NotificationService {
  sendNotification(userDetails: CreateUserDto) {
    console.log(`Welocome to CAST IT ${userDetails.userName}`);
  }
}
