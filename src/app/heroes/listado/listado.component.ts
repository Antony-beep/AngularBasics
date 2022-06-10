import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string[]=['SpiderMan','HULK','Batman',
  'Hombre Topo','Warlok'];   
  
  heroremoved:string ='';

  borrarHeroe():void{
    // usamos el || or para que se entienda
    // rm va a a ser undefined o string vacio
    this.heroremoved=this.heroes.shift() || '';
    
  }

}
