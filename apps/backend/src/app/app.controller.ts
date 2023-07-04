import { Controller, Get, Res, HttpStatus, UseGuards, Post, Body, Request, Param, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './modules/auth/auth.service';
import { UserDTO } from './dto/UserDTO';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Backend API')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiBody({
    schema: {
      type: 'object',
      example: {
          username: 'admin',
          password: 'admin',
      },
  },
  })
  async login(@Body() userDTO: UserDTO) {
    return this.authService.login(userDTO);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    return this.authService.getUser(req);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('users')
  getAllUsers() {
    return this.authService.getAllUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post('users')
  createUser(@Body() user: UserDTO) {
    return this.authService.createUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Delete('users/:id')
  deleteUser(@Param('id') id: string) {
    return this.authService.deleteUser(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get('check-token')
  checkToken(@Res() res): any {
    res.status(HttpStatus.OK).json({ message: 'Valid token' });
  }
}
