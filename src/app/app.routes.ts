import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { SearchPage } from './pages/search-page/search-page';
import { TovarPage } from './pages/tovar-page/tovar-page';
import { Layout } from './common-ui/layout/layout';

export const routes: Routes = [
    {path: '', component: Layout, children: [
        {path: '', component: SearchPage},
        {path: 'tovar', component: TovarPage},
    ]},
    {path: 'login', component: LoginPage}
];
