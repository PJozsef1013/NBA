import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';

import { BucksComponent } from './bucks.component';

describe('BucksComponent', () => {
  let component: BucksComponent;
  let fixture: ComponentFixture<BucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CardComponentModule, FormsModule, MatIconModule, MatInputModule, NoopAnimationsModule],
      declarations: [BucksComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
