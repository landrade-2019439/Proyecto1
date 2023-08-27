import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DogsService } from '../dogs.service';
import { DogsComponent } from './Components/dogs/dogs.component';
import { AdminRoutingModule } from './routing/admin-routing.module';

@NgModule({
  declarations: [DogsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule
  ],
  providers: [
    DogsService
  ],
  bootstrap: [DogsComponent]
})
export class AdminModule { }
