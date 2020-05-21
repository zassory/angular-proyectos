import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RobotsComponent } from './components/robots/robots.component';
import { RobotComponent } from './components/robot/robot.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


//Definición de rutas

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'robots', component: RobotsComponent},
    {path: 'robot/:id', component: RobotComponent},
    {path: 'buscar/:termino', component: BuscadorComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



