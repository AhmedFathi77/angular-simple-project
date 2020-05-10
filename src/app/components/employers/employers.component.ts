import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
  employers: Employee[];

  constructor() {
    this.employers = [
      {
        id: 1,
        name: 'Ahmed Fathi',
        age: 23,
        salary: 15000,
        dep: { id: 1, name: 'IT Department' }
      },
      {
        id: 2,
        name: 'Mohamed Fathi',
        age: 24,
        salary: 11000,
        dep: { id: 2, name: 'HR Department' }
      },
      {
        id: 3,
        name: 'Ahmed Fathi',
        age: 25,
        salary: 13000,
        dep: { id: 2, name: 'HR Department' }
      },
      {
        id: 4,
        name: 'Ahmed Fathi',
        age: 26,
        salary: 16000,
        dep: { id: 2, name: 'HR Department' }
      },
      {
        id: 1,
        name: 'Ahmed Fathi',
        age: 23,
        salary: 15000,
        dep: { id: 2, name: 'HR Department' }
      },
      {
        id: 1,
        name: 'Ahmed Fathi',
        age: 23,
        salary: 15000,
        dep: { id: 2, name: 'HR Department' }
      },
    ];
  }

  ngOnInit(): void {
  }

}
