import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsDisplayComponent } from './star-wars-display.component';

describe('StarWarsDisplayComponent', () => {
  let component: StarWarsDisplayComponent;
  let fixture: ComponentFixture<StarWarsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
