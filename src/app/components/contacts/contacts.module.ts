import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactsFilterComponent } from './contacts-filter/contacts-filter.component';
import { PersonalComponent } from './personal/personal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewContactComponent } from './new-contact/new-contact.component';
import { AddressContentComponent } from './personal/edit-from/address-content/address-content.component';
import { PersonalContentComponent } from './personal/edit-from/personal-content/personal-content.component';
import { GeneralComponent } from './personal/edit-from/general/general.component';
import { PrintModalComponent } from './print-modal/print-modal.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactsFilterComponent,
    PersonalComponent,
    NewContactComponent,
    AddressContentComponent,
    PersonalContentComponent,
    GeneralComponent,
    PrintModalComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule
  ]
})
export class ContactsModule { }
