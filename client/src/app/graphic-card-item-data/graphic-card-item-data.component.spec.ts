import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardItemDataComponent } from './graphic-card-item-data.component';

describe('GraphicCardItemDataComponent', () => {
  let component: GraphicCardItemDataComponent;
  let fixture: ComponentFixture<GraphicCardItemDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardItemDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicCardItemDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
