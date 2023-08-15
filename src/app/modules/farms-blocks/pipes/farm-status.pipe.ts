import { Pipe, PipeTransform } from '@angular/core';

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

@Pipe({
  name: 'farmStatus',
})
export class FarmStatusPipe implements PipeTransform {
  private rootIconPath = './assets/status/';
  transform(status: keyof typeof farmStatus): string {
    const src = farmStatus[status].src;
    const alt = farmStatus[status].alt;

    return `<img src="${this.rootIconPath}${src}" alt="${alt}" />`;
  }
}
