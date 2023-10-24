import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 0,
      name: 'kokushibo',
      weapon: 'stars',
    },
    {
      id: 1,
      name: 'nanami',
      weapon: 'nunchucks',
    },
    {
      id: 3,
      name: 'momota',
      weapon: 'katana',
    },
    {
      id: 4,
      name: 'wick',
      weapon: 'pen',
    },
  ];
  getNinjas(weapon?: string) {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }
}
