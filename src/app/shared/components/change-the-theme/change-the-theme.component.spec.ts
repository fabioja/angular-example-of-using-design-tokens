import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTheThemeComponent } from './change-the-theme.component';

describe('ChangeTheThemeComponent', () => {
  let component: ChangeTheThemeComponent;
  let fixture: ComponentFixture<ChangeTheThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTheThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTheThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
