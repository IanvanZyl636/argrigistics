import { Component, Input, OnInit } from '@angular/core';

type farmStatusType = {
  [name: string]: { src: string; alt: string; tooltip: string };
};

const farmStatus: farmStatusType = {
  PRODUCTION: {
    src: 'Status_Completed.svg',
    alt: 'Status completed icon',
    tooltip: 'In Production',
  },
  AREA: {
    src: 'Status_Active.svg',
    alt: 'Status active icon',
    tooltip: 'Active',
  },
  COMPLETE: {
    src: 'Status_Removed.svg',
    alt: 'Status removed icon',
    tooltip: 'Removed',
  },
};
@Component({
  selector: 'app-farm-status',
  templateUrl: './farm-status.component.html',
  styleUrls: ['./farm-status.component.scss'],
})
export class FarmStatusComponent implements OnInit {
  @Input()
  status: keyof typeof farmStatus | undefined;

  source = '';
  alt = '';
  tooltip = '';

  private rootIconPath = './assets/status/';
  ngOnInit() {
    if (!this.status || !farmStatus[this.status]) {
      return;
    }

    this.source = `${this.rootIconPath}${farmStatus[this.status].src}`;
    this.alt = farmStatus[this.status].alt;
    this.tooltip = farmStatus[this.status].tooltip;
  }
}
