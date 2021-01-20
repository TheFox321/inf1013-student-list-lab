import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../models/student';
import {Score} from '../../models/score';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
