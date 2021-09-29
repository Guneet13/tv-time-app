import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTimeComponent } from './tv-time.component';

describe('TvTimeComponent', () => {
  let component: TvTimeComponent;
  let fixture: ComponentFixture<TvTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
