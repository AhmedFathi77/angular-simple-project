export class Department{
  id: number;
  name: string;
}
export class Employee{
  id: number;
  name: string;
  age: number;
  salary: number;
  dep: Department;
}

export class EmployerForm{
  name: string;
  age: number;
  salary: number;
  dep: number;
}
