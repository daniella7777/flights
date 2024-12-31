import { Routes } from '@angular/router';
import { HelpPageComponent } from './features/pages/help-page/help-page.component';
import { HomePageComponent } from './features/pages/home-page/home-page.component';

export const routes: Routes = [
    { path: 'help', component: HelpPageComponent },
    { path: "", component: HomePageComponent},
];
