import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.componen';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Las declaraciones son los componentes o 
    //pipes que incluira
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //lo que sera visible en la app
    exports:[
        ListadoComponent
    ],
    //usualmente solo se importan MODULOS
    imports:[
    //El CommonModule agrega mas funcionalidad como el ngif y el ngfors
        CommonModule
    ]
})

export class HeroesModule {

}