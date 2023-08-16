import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmsBlocksRoutingModule } from './farms-blocks-routing.module';
import { FarmsBlocksComponent } from './farms-blocks.component';
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
import { FarmStatusComponent } from './components/farm-status/farm-status.component';
import { PageModule } from '../../shared/components/page/page.module';

@NgModule({
  declarations: [FarmsBlocksComponent, FarmStatusComponent],
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
    PageModule,
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
