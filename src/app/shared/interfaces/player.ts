import { PlayerDatas } from './player-datas';
import { PlayerStats } from './player-stats';

export interface Player {
  id: string;
  playerDatas: PlayerDatas;
  playerStats: PlayerStats;
  imageUrl?: string;
}
