import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmsBlocksRoutingModule } from './farms-blocks-routing.module';
import { FarmsBlocksComponent } from './farms-blocks.component';
import { FarmStatusPipe } from './pipes/farm-status.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [FarmsBlocksComponent, FarmStatusPipe],
  imports: [CommonModule, FarmsBlocksRoutingModule, MatPaginatorModule],
})
export class FarmsBlocksModule {}
