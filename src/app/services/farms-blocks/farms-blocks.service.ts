import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, of } from 'rxjs';
import blocks from 'src/mocks/blocks.json';

@Injectable({
  providedIn: 'root',
})
export class FarmsBlocksService {
  getFarmsBlocks() {
    return of(blocks).pipe(delay(1000));
  }
}
