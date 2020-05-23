import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {ContactListComponent} from './contact-list/contact-list.component'
import {LayoutComponent} from './layout/layout.component'
import {ContactEditComponent} from './contact-edit/contact-edit.component'
import {ContactNewComponent} from './contact-new/contact-new.component'
import {TagEditComponent} from './tag-edit/tag-edit.component'
import {TagListComponent} from './tag-list/tag-list.component'
import {TagNewComponent} from './tag-new/tag-new.component'
import { AutoGuard } from './auto-guard.service';
const routes: Routes = [{
  path:'signin',component:SigninComponent
},
{
  path:'signup',component:SignupComponent
},{
  path:'layout',component:LayoutComponent,
  canActivate:[AutoGuard],
  children:[
    {
    path:'',
    component: ContactListComponent
  },{
    path:'contact-list',
    component: ContactListComponent
  },{
    path:'contact-edit/:id',
    component: ContactEditComponent
  },{
    path:'contact-new',
    component: ContactNewComponent
  }]
},{
  path:'tag',
  canActivate:[AutoGuard],
  component:LayoutComponent,
  children:[{
    path:'tag-new',
    component:TagNewComponent
  },{
    path:'tag-edit',
    component:TagEditComponent
  },{
    path:'tag-list',
    component:TagListComponent
  }]
},{
  path:'**',redirectTo:'signin'
}];
@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AutoGuard]
}
)
export class AppRoutingModule { }
