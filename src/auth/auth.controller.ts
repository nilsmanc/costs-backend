import { UsersService } from './../users/users.service';
import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { RegistrationGuard } from './guards/registration.guard';
@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}
  @UseGuards(RegistrationGuard)
  @Post('registration')
  async registartionUser(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ) {
    await this.usersService.registration(createUserDto);
    res.statusCode = HttpStatus.CREATED;
    return res.send('user created');
  }
}
