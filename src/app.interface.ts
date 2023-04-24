export interface Employee  {
     fname : string;
     lname : string;
     age : number;
     salary : number;
  }

export interface Signin {
    username : string; 
    password : string; 
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateEmpDto {
  @ApiProperty()
  fname : string;

  @ApiProperty()
  lname : string;

  @ApiProperty()
  age : number;

  @ApiProperty()
  salary : number;
}