import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddPlayerModule } from '../../modals/add-player/add-player.module';
import { DeletePlayerModule } from '../../modals/delete-player/delete-player.module';
import { ModifyPlayerModule } from '../../modals/modify-player/modify-player.module';

import { CardComponent } from './card.component';

describe('CardComponentComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        FontAwesomeModule,
        AddPlayerModule,
        ModifyPlayerModule,
        DeletePlayerModule,
        MatInputModule,
        MatTooltipModule,
        FormsModule,
        NoopAnimationsModule
      ],
      declarations: [CardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
