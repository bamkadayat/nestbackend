import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiAcceptedResponse,
  ApiBadGatewayResponse,
  ApiDefaultResponse,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';

@Controller()
@ApiTags('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiAcceptedResponse({ description: 'Welcome to the NestJS API!' })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  @ApiDefaultResponse({ description: 'Default Response' })
  @ApiProperty({ type: String, description: 'Welcome to the NestJS API!' })
  getHello(): string {
    return this.appService.getHello();
  }
}
