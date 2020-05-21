import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RobotsService } from '../../servicios/robots.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  robots: any[]=[];
  termino:string;

  constructor(private activatedRouter: ActivatedRoute,private _robotsService:RobotsService) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
      this.termino = params['termino'];
      this.robots = this._robotsService.buscarRobots(params['termino']);
    });
  }

}
