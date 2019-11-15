import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            { path: 'messages', component: ListsComponent},
            { path: 'lists', component: ListsComponent},
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
