import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TendancePhotoComponent } from './tendance-photo/tendance-photo.component';


export const routes: Routes = [
    {path:"", redirectTo:"/photos",pathMatch:"full"},
    {path:"photos",component:TendancePhotoComponent},
    {path:"**",component:NotFoundComponent}
];
