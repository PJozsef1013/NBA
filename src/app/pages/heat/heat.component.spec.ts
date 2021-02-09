import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';

import { HeatComponent } from './heat.component';

describe('HeatComponent', () => {
  let component: HeatComponent;
  let fixture: ComponentFixture<HeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CardComponentModule, FormsModule, MatInputModule, MatIconModule, NoopAnimationsModule],
      declarations: [HeatComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
