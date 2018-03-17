import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent {

  sum: string = "";
  random: number;
  batch: any;
  solution1: any;

  constructor(private util: UtilService) {
    this.solution1 = util.solution1();

    this.random = util.generatePin();

    this.batch = util.generateBatch();
    console.log(this.batch);

  }

}
