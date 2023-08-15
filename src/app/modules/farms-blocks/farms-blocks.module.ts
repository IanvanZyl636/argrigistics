import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmsBlocksRoutingModule } from './farms-blocks-routing.module';
import { FarmsBlocksComponent } from './farms-blocks.component';
import { FarmStatusPipe } from './pipes/farm-status.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [FarmsBlocksComponent, FarmStatusPipe],
  imports: [
    CommonModule,
    FarmsBlocksRoutingModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatAutocompleteModule,
    FormsModule,
    MatChipsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic',
      },
    },
  ],
})
export class FarmsBlocksModule {}
