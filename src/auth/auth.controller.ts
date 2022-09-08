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
import { LoginUserDto } from './dto/login-user.dto';
import { LoginGuard } from './guards/login.guard';

@Controller('auth')
export class AuthController {
  constructor(private usersService: UsersService) {}

  @UseGuards(LoginGuard)
  @Post('login')
  async loginnUser(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const user = await this.usersService.login(loginUserDto);
    res.statusCode = HttpStatus.OK;
    return res.send({ username: user.username });
  }

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
