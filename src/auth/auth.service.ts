import { User } from './../schemas/users.schema';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}
  async validateUser(username: string): Promise<User | null> {
    const user = await this.userService.findOne(username);

    if (!user) {
      return null;
    }

    return user;
  }
}
