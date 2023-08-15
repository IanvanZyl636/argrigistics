import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import blocks from 'src/mocks/blocks.json';
import { FarmModel } from '../../models/farm.model';

@Injectable({
  providedIn: 'root',
})
export class FarmsBlocksService {
  getFarmsBlocks() {
    return of(blocks as FarmModel[]).pipe(delay(1000));
  }
}
