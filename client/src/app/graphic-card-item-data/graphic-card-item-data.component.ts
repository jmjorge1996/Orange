import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-card-item-data',
  templateUrl: './graphic-card-item-data.component.html',
  styleUrls: ['./graphic-card-item-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicCardItemDataComponent{

  constructor() { }

  @Input() title!: string
  @Input() value!: string

}
