import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            //user resgister
            { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
            //addcompany
            { path: 'addcompany', loadChildren: './addcompany/addcompany.module#AddCompanyModule' },
            //manage user
            { path: 'manageuser', loadChildren: './manageuser/manageuser.module#manageUserModule'},
            //manage company
            { path: 'managecompany', loadChildren: './managecompany/managecompany.module#ManageCompanyModule'},
            //add model
            { path: 'addmodel', loadChildren: './addmodel/addmodel.module#AddCompanyModule'},
            //manage model
            { path: 'managemodel', loadChildren: './managemodel/managemodel.module#ManageModelModule'},
            //add color
            { path: 'addcolor', loadChildren: './addcolor/addcolor.module#AddColorModule'},
            //mange color
            { path: 'mangecolor', loadChildren: './mangecolor/mangecolor.module#MangeColorModule'},
            //mange color
            { path: 'create-bill', loadChildren: './create-bill/create-bill.module#CreateBillModule'},
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
