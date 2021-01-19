import { Player } from './player';

export interface Team {
  teamId: string;
  name: string;
  roster: Player[];
}
