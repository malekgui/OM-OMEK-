import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResSalleComponent } from './res-salle.component';

describe('ResSalleComponent', () => {
  let component: ResSalleComponent;
  let fixture: ComponentFixture<ResSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResSalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
