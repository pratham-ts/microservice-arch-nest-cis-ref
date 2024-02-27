import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserDto } from 'proto/admin';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern({ cmd: 'user-added' })
  sendNotification(userDetails: CreateUserDto) {
    return this.notificationService.sendNotification(userDetails);
  }
}
