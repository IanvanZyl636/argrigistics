import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmsBlocksComponent } from './farms-blocks.component';

const routes: Routes = [
  {
    component: FarmsBlocksComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmsBlocksRoutingModule {}
