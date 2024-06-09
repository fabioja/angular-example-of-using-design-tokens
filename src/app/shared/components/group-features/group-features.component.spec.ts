import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFeaturesComponent } from './group-features.component';

describe('GroupFeaturesComponent', () => {
  let component: GroupFeaturesComponent;
  let fixture: ComponentFixture<GroupFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
