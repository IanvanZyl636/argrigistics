import { Component } from '@angular/core';
import {
  faCaretDown,
  faMagnifyingGlass,
  faTimesCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { debounceTime, tap } from 'rxjs/operators';
import { FarmsBlocksService } from '../../shared/services/farms-blocks/farms-blocks.service';
import { FarmModel } from '../../shared/models/farm.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-farms-blocks',
  templateUrl: './farms-blocks.component.html',
  styleUrls: ['./farms-blocks.component.scss'],
})
export class FarmsBlocksComponent {
  private _farmNames: string[] = [];
  private _farmsBlocks: FarmModel[] = [];

  filterFarmText = '';
  selectedFarm = '';
  searchedFarmBlock = '';
  removedBlockToggle = false;
  faMagnifyingGlass = faMagnifyingGlass;
  faCaretDown = faCaretDown;
  faTimesCircle = faTimesCircle;
  faPlus = faPlus;
  searchFarmFormControl = new FormControl();

  farmsBlocks$ = this.farmsBlocksService.getFarmsBlocks().pipe(
    tap((resp) => {
      this.setFarmNames(resp);
      this._farmsBlocks = resp;
    })
  );

  searchFarmBlock$ = this.searchFarmFormControl.valueChanges
    .pipe(debounceTime(2000))
    .pipe(tap((value) => (this.searchedFarmBlock = value)));

  get filteredFarmNames(): string[] {
    if (this._farmNames.length <= 0) {
      return [];
    }

    if (this.filterFarmText === '') {
      return this._farmNames;
    }

    return this._farmNames.filter(
      (val) =>
        val.toLowerCase().indexOf(this.filterFarmText.toLowerCase()) !== -1
    );
  }
  get filteredFarmsBlocks(): FarmModel[] {
    if (this.selectedFarm === '') {
      return [];
    }

    const searchedFarmBlock = this.searchedFarmBlock.toLowerCase();

    const farmNameFilteredValues = this._farmsBlocks.filter(
      (item) => item.farmName === this.selectedFarm
    );
    const removeBlockFilteredValues = farmNameFilteredValues.filter(
      (item) =>
        !this.removedBlockToggle ||
        (this.removedBlockToggle && item.deletedAt !== null)
    );

    return removeBlockFilteredValues.filter(
      (item) =>
        !this.searchedFarmBlock ||
        item.name.toLowerCase().indexOf(searchedFarmBlock) !== -1 ||
        (item.variant &&
          item.variant.toLowerCase().indexOf(searchedFarmBlock) !== -1)
    );
  }

  constructor(private farmsBlocksService: FarmsBlocksService) {}

  private setFarmNames(farmsBlocks: FarmModel[]) {
    const distinctFarmNames: string[] = [];

    farmsBlocks.forEach((item) => {
      if (distinctFarmNames.indexOf(item.farmName) !== -1) {
        return;
      }

      distinctFarmNames.push(item.farmName);
    });

    this._farmNames = distinctFarmNames;
  }

  sumHa(farmsBlocks: FarmModel[]) {
    if (farmsBlocks.length <= 0) {
      return 0;
    }

    let sum = 0;

    farmsBlocks.forEach((item) => (sum += item.size));

    return sum;
  }
}
