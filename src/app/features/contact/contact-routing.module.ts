import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: ContactComponent, children: [{path: 'contact-us', component: ContactUsComponent}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
