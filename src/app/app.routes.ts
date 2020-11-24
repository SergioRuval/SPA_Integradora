import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageComponent } from './components/manage/manage.component';
import { SearchComponent } from './components/search/search.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'signUp', component: SignUpComponent},
    {path: 'manage', component: ManageComponent},
    {path: 'search', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]