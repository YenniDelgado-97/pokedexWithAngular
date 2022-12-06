import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// componentes
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'team',
        component: TeamComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }

