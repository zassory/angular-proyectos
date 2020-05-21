import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';//Capturar el valor de un param dinamico de la url
import { RobotsService } from '../../servicios/robots.service';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styles: []
})
export class RobotComponent{

  //RobotsService
  robot:any={};
  constructor(private activatedRoute:ActivatedRoute,private _robotsService:RobotsService) { 
    this.activatedRoute.params.subscribe(params=>{
      this.robot = this._robotsService.getRobot(params['id']);
      console.log(this.robot);
    })
  }

  

}
