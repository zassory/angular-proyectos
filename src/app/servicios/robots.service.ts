import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  private robots:Robot[]=[
    {
      nombre: "Elecman",
      //bio: "Robot que vigila las industrias electricas y que desata el mal en la hidroelectricas provocando el no funcionamiento de todo y el sobre voltaje de muchos electrodomesticos",
      bio: "Robot que vigila las industrias electricas y que desata el mal",
      img: "assets/img/elecman.jpg",
      aparicion: "Megaman 1",
      fecha: "1987",
      elemento: "Electricidad"
    },
    {
      nombre: "Bubbleman",
      //bio: "Robot dedicado a limpiar los residuos industriales del mar, actualmente mantiene tpaadas todas las salidas de agua impidiendo que los humanos tengan agua potable",
      bio: "Robot dedicado a limpiar los residuos industriales del mar",
      img: "assets/img/bubbleman.jpg",
      aparicion: "Megaman 2",
      fecha: "1988",
      elemento: "Agua"
    },
    {
      nombre: "Shadowman",
      //bio: "Robot peleador, sus tecnicas son capaces de derrotar actos terroristas como la lucha contra enemigos, ademas es mayormente utilizado para misiones peligrosas",
      bio: "Robot peleador, sus tecnicas son capaces de derrotar ",
      img: "assets/img/shadowman.jpg",
      aparicion: "Megaman 3",
      fecha: "1990",
      elemento: "Terrestre"
    },
    {
      nombre: "PharaohMan",
      //bio: "Robot creado para excavaciones peligrosas de tesoros egipcios y de otras ruinas, es capaz de adentrarse en cuevas y en rincones bien frofundos en busca de tesoros o reliquias",
      bio: "Robot creado para excavaciones peligrosas de tesoros",
      img: "assets/img/pharaohman.jpg",
      aparicion: "Megaman 4",
      fecha: "1991",
      elemento: "Terrestre"
    },
    {
      nombre: "Starman",
      //bio: "Robot espacial, sus principales labores son la de realizar mantencion a satelites y a bases espaciales, ultimamente corto toda la red satelital",
      bio: "Robot espacial, sus principales labores son la de ",
      img: "assets/img/starman.jpg",
      aparicion: "Megaman 5",
      fecha: "1992",
      elemento: "Electricidad"
    },
    {
      nombre: "Flameman",
      //bio: "Robot peligroso que maneja fuego y materiales a altas temperaturas, ideal para construcción y manejo de metales pesados",
      bio: "Robot peligroso que maneja fuego y materiales a altas temperaturas",
      img: "assets/img/flameman.jpg",
      aparicion: "Megaman 6",
      fecha: "1992",
      elemento: "Fuego"
    },
    {
      nombre: "Freezeman",
      //bio: "Robot de hielo, sus principales tareas son la de explorar el polo sur y sus extremos en tareas cientificas",
      bio: "Robot de hielo, sus principales tareas son la de explorar",
      img: "assets/img/freezeman.jpg",
      aparicion: "Megaman 7",
      fecha: "1995",
      elemento: "Hielo"
    },
    {
      nombre: "Tenguman",
      //bio: "Robot guardaespalda, este robot tiene como tareas defender al humano que lo contrate siendo un agente de algun mercado negro de trata de robots",
      bio: "Robot guardaespalda, este robot tiene como tareas defender",
      img: "assets/img/tenguman.jpg",
      aparicion: "Megaman 8",
      fecha: "1996",
      elemento: "Terrestre"
    },
    {
      nombre: "Tornadoman",
      //bio: "Robot de tareas extremas, este robot es capaz de reparar instrumentos a gran altura como de cambiar ciertas partes del clima en beneficio de alguna investigación",
      bio: "Robot de tareas extremas, este robot es capaz de reparar ",
      img: "assets/img/tornadoman.jpg",
      aparicion: "Megaman 9",
      fecha: "2008",
      elemento: "Aire"
    },
    {
      nombre: "Solarman",
      //bio: "Robot capaz de resistir increibles temperaturas, capaz de ingresar en capaz interiores del planeta para la extracción de minerales raros",
      bio: "Robot capaz de resistir increibles temperaturas, ",
      img: "assets/img/solarman.jpg",
      aparicion: "Megaman 10",
      fecha: "2010",
      elemento: "Fuego"
    }    
  ];



  constructor() { 
    console.log("El servicio esta listo para trabajar");
  }

  getRobots(){
    return this.robots;
  }

  getRobot(idx:string){
    return this.robots[idx];
  }

  buscarRobots(termino:string):Robot[]{
    let robotsArr:Robot[] = [];
    termino = termino.toLowerCase();

    for(let i=0;i<this.robots.length;i++){
        let robot = this.robots[i];
        let nombre = robot.nombre.toLowerCase();

        //Indexof si no pilla coincidencia devuelve un -1
        if(nombre.indexOf(termino) >=0){
          robot.idx = i;
          robotsArr.push( robot );
        }
    }
    return robotsArr;
  }
}

export interface Robot{
  nombre:string,
  bio:string,
  img:string,
  aparicion:string,
  fecha:string,
  elemento:string,
  idx?: number
}




