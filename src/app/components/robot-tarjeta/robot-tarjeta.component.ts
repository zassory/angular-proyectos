import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robot-tarjeta',
  templateUrl: './robot-tarjeta.component.html',
  styleUrls: ['./robot-tarjeta.component.css']
})
export class RobotTarjetaComponent implements OnInit {

@Input() robot: any = {};
@Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verRobot(){
    this.router.navigate(['/robot',this.index]);
  }

}
