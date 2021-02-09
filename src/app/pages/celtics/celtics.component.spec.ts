import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';

import { CelticsComponent } from './celtics.component';
const roster = [
  {
    id: '1',
    playerDatas: {
      playerName: 'Jaylen Brown',
      position: 'SG/SF',
      yerseyNumber: 7,
      age: 25,
      height: `6'6`,
      weight: 223
    },
    playerStats: {
      twoThousendNineTeen: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      },
      twoThousendTwenty: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      }
    },
    imageUrl: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1627759.png'
  },
  {
    id: '2',
    playerDatas: {
      playerName: 'Marcus Smart',
      position: 'PG/SG',
      yerseyNumber: 36,
      age: 27,
      height: `6'3`,
      weight: 240
    },
    playerStats: {
      twoThousendNineTeen: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      },
      twoThousendTwenty: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      }
    },
    imageUrl: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/203935.png'
  },
  {
    id: '3',
    playerDatas: {
      playerName: 'Jayson Tatum',
      position: 'SG/SF',
      yerseyNumber: 0,
      age: 23,
      height: `6'8`,
      weight: 210
    },
    playerStats: {
      twoThousendNineTeen: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      },
      twoThousendTwenty: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      }
    },
    imageUrl: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/1628369.png'
  },
  {
    id: '4',
    playerDatas: {
      playerName: 'Tristan Thompson',
      position: 'PG/C',
      yerseyNumber: 13,
      age: 30,
      height: `6'9`,
      weight: 254
    },
    playerStats: {
      twoThousendNineTeen: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      },
      twoThousendTwenty: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      }
    },
    imageUrl: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/202684.png'
  },
  {
    id: '5',
    playerDatas: {
      playerName: 'Kemba Walker',
      position: 'PG',
      yerseyNumber: 8,
      age: 31,
      height: `6'0`,
      weight: 184
    },
    playerStats: {
      twoThousendNineTeen: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      },
      twoThousendTwenty: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      }
    },
    imageUrl: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/202689.png'
  },
  {
    id: '6',
    playerDatas: {
      playerName: 'Jeff Teague',
      position: 'PG',
      yerseyNumber: 55,
      age: 33,
      height: `6'3`,
      weight: 195
    },
    playerStats: {
      twoThousendNineTeen: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      },
      twoThousendTwenty: {
        pointsPerGame: 25.3,
        reboundsPerGame: 6.4,
        assistsPerGame: 6.5,
        stealsPerGame: 2.3,
        blocksPerGame: 0.9
      }
    },
    imageUrl: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/201952.png'
  }
];
describe('CelticsComponent', () => {
  let component: CelticsComponent;
  let fixture: ComponentFixture<CelticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CardComponentModule, FormsModule, MatIconModule, MatInputModule, NoopAnimationsModule],
      declarations: [CelticsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter roster by name', () => {
    component.roster = roster;
    component.filteredByName('Jaylen Brown');
    expect(component.roster.length).toEqual(1);
    expect(component.roster[0].playerDatas.playerName).toEqual('Jaylen Brown');
  });
});
