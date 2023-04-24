import { Body, Controller, Get, Post, Req, Res, HttpException, HttpStatus, Logger, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { CreateEmpDto, Employee } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("GetEmployee")
  GetEmployee(@Res() res: Response) {
    const data = this.appService.getEmployee();
    res.status(HttpStatus.OK).json(data)
  }
  
  @Post("CreateEmployee")
  Create(@Body() input: CreateEmpDto, @Res() res: Response){
    this.appService.createEmployee(input);
    res.status(HttpStatus.OK).json({
      massage : "Success"
    })
  }
}


