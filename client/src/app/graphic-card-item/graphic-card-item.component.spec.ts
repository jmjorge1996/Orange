import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardItemComponent } from './graphic-card-item.component';

describe('GraphicCardItemComponent', () => {
  let component: GraphicCardItemComponent;
  let fixture: ComponentFixture<GraphicCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
