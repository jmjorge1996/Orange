import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsCardListComponent } from './graphics-card-list.component';

describe('GraphicsCardListComponent', () => {
  let component: GraphicsCardListComponent;
  let fixture: ComponentFixture<GraphicsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
