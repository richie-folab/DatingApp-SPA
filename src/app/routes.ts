import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
            { path: 'messages', component: ListsComponent, canActivate: [AuthGuard]},
            { path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];


// // This is another way of achieving the code above
// export const appRoutes: Routes = [
//     { path: 'home', component: HomeComponent},
//     { path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
//     { path: 'messages', component: ListsComponent, canActivate: [AuthGuard]},
//     { path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
//     { path: '**', redirectTo: 'home', pathMatch: 'full'}
// ];
