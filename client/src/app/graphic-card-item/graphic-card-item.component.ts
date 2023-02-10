import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../core/services/api.service';
import { GraphicsCard } from '../shared/models/GraphicCard';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-graphic-card-item',
  templateUrl: './graphic-card-item.component.html',
  styleUrls: ['./graphic-card-item.component.scss']
})
export class GraphicCardItemComponent implements OnInit{

  graphicCard: GraphicsCard | undefined
  routeSub: Subscription | undefined;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const graphicCardId = params['idView']
      this.api.getGraphicCardById(graphicCardId).subscribe((res) => {
        if (res) {
          this.graphicCard = res
          setTimeout(() => {
            if (this.graphicCard) {
              this.graphicCard.name = 'asdas'
            }
          }, 5000);
        }
      })
    });

  }

  goBack(): void {
    this.router.navigate(['graphics-cards']);
  }

}
