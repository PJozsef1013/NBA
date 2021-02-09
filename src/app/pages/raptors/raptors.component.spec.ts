import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';

import { RaptorsComponent } from './raptors.component';

describe('RaptorsComponent', () => {
  let component: RaptorsComponent;
  let fixture: ComponentFixture<RaptorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CardComponentModule, FormsModule, MatInputModule, MatIconModule, NoopAnimationsModule],
      declarations: [RaptorsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaptorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
