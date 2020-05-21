import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIO 
import { RobotsService } from './servicios/robots.service';


//COMPONENTS  
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { RobotComponent } from './components/robot/robot.component';
import { RobotTarjetaComponent } from './components/robot-tarjeta/robot-tarjeta.component';
import { RobotsComponent } from './components/robots/robots.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RobotComponent,
    RobotTarjetaComponent,
    RobotsComponent,
    BuscadorComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [RobotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
