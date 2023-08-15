import { Component } from '@angular/core';
import { FarmsBlocksService } from '../../services/farms-blocks/farms-blocks.service';

@Component({
  selector: 'app-farms-blocks',
  templateUrl: './farms-blocks.component.html',
  styleUrls: ['./farms-blocks.component.scss'],
})
export class FarmsBlocksComponent {
  farmsBlocks$ = this.farmsBlocksService.getFarmsBlocks();

  constructor(private farmsBlocksService: FarmsBlocksService) {}
}
