import { Component, OnInit } from '@angular/core';
import { RobotsService,Robot } from '../../servicios/robots.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styles: []
})
export class RobotsComponent implements OnInit {

  robots:Robot[]=[];

  constructor(private _robotsService:RobotsService,private router:Router) { }

  ngOnInit() {
    this.robots = this._robotsService.getRobots();
  }

  verRobot(idx:number){
    this.router.navigate(['/robot',idx]);
  }

}
