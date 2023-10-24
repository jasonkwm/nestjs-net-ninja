import { Injectable } from '@nestjs/common';
import { CreateNinjasDto } from './dto/create-ninjas.dto';
import { UpdateNinjasDto } from './dto/update-ninjas.dto';

@Injectable()
export class NinjasService {
  private ninjaCount = 4;

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

  getNinjas(weapon?: 'stars' | 'nunchucks' | 'katana' | 'pen') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }

    return this.ninjas;
  }

  getOneNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if (ninja) {
      throw new Error('ninja not found. :(');
    }

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjasDto) {
    const newNinja = {
      ...createNinjaDto,
      id: ++this.ninjaCount,
    };

    this.ninjas.push(newNinja);

    return newNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjasDto) {
    this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinjaDto };
      }
      return ninja;
    });

    return this.getOneNinja(id);
  }

  removeNinja(id: number) {
    const removedNinja = this.getOneNinja(id);

    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

    return removedNinja;
  }
}
