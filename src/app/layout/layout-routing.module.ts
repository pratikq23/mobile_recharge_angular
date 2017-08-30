import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
            { path: 'addcompany', loadChildren: './addcompany/addcompany.module#AddCompanyModule' },
            { path: 'manageuser', loadChildren: './manageuser/manageuser.module#manageUserModule'},
            { path: 'managecompany', loadChildren: './managecompany/managecompany.module#ManageCompanyModule'},
            { path: 'addmodel', loadChildren: './addmodel/addmodel.module#AddCompanyModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
