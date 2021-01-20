import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/student';
import {Score} from '../../models/score';
import {StudentDetailsComponent} from '../student-details/student-details.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  selected: Student;
  students= [{
    id:1,
    firstName:"Alex",
    lastName:'Carbonneau',
    codePermanent:'CARA26089907',
  scores:[{name:'INF1001 - Introduction au web', value: 'A+'},
    {name:'INF1035', value: 'C+'},
    {name:'SIF1035', value: 'A-'}] as Score[]},
{
  id:3,
  firstName:"Félix",
  lastName:'Coriveau',
  codePermanent:'CORF45697726'},
{
  id:2,
    firstName:"Joël",
  lastName:'Cartier',
  codePermanent:'CARJ45458898'}] as Student[];

  constructor() {
  }

  ngOnInit() {
  }
}
