import {Routes,RouterModule} from '@angular/router';
//importar componentes//
import {HomeComponent} from './components/home/home.component';
import {PeliculaComponent} from './components/pelicula/pelicula.component';
import { SearchComponent } from './components/shared/search/search.component';

var routes:Routes = [
    {path:'home', component:HomeComponent},
    {path:'pelicula', component:PeliculaComponent},
    {path:'search/:pqe', component:SearchComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
