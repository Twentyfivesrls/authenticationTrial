import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaccaComponent } from './cacca.component';

describe('CaccaComponent', () => {
  let component: CaccaComponent;
  let fixture: ComponentFixture<CaccaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaccaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaccaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
