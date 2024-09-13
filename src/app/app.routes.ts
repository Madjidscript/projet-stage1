import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:"accueil",component:AccueilComponent},
    {path:"", redirectTo:"/accueil",pathMatch:"full"},
    {path:"**",component:NotFoundComponent}
];
