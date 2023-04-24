import { Injectable } from '@nestjs/common';
import { Employee } from './app.interface';

@Injectable()
export class AppService {
  public emp: Employee[] = [
    {fname: "Raland", lname: "Switch", age: 20, salary: 20000},
    {fname: "Cherry", lname: "Clicky", age: 22, salary: 25000},
    {fname: "Sam", lname: "Buk", age: 25, salary: 25000},
    {fname: "Sozy", lname: "lon", age: 25, salary: 21000},
    {fname: "Bom", lname: "Boo", age: 25, salary: 30000}
  ]; 
  
  getHello(): string {
    return 'Hello World!';
  }

  getEmployee(): Employee[] { 
    return this.emp;
  }

  createEmployee(p : Employee) {
    this.emp.push({
      fname : p.fname,
      lname : p.lname,
      age : p.age,
      salary : p.salary
    })
  }
}
