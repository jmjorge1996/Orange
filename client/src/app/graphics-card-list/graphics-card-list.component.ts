import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../core/services/api.service';
import { GraphicsCard } from '../shared/models/GraphicCard';
import { FormBuilder, Validators } from '@angular/forms';

import { switchMap, timer, take } from 'rxjs';

@Component({
  selector: 'app-graphics-card-list',
  templateUrl: './graphics-card-list.component.html',
  styleUrls: ['./graphics-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardListComponent implements OnInit{

  graphicsCards: GraphicsCard[] = [];
  @ViewChild('graphicCardList', { static: true })
  graphicCardList: ElementRef | undefined;
  isSearching: boolean = false;
  isLoading: boolean = false;
  isEmpty: boolean = true;
  form = this.fb.group({
    query: ['', Validators.required],
    paginator: [10, Validators.required]
  });
  initialOffset:number = 10;
  offset:number = this.initialOffset;
  graphicsCardsLength: number = 72;

  constructor(
    private api: ApiService,
    private router: Router,
    private fb:FormBuilder, 
    private cdr: ChangeDetectorRef
  ){}
  
  ngOnInit(): void {
    if (this.graphicCardList !== undefined) {
      this.graphicCardList.nativeElement.addEventListener('scroll', this.onScroll);
    }

    this.getAllGraphicCards();    
  }

  private getAllGraphicCards():void {
    const offset = this.form.value.paginator || undefined;
    this.isLoading = true;
    // Setting timer to display loading spinner
    timer(500).pipe(
      switchMap(()=>{
        return this.api.getGraphicsCards(0, offset);
      }),
      take(1)
    ).subscribe((res) => {
      if(res){
        this.graphicsCards = res;
        this.isLoading = false;
        this.isEmpty = false;
        this.cdr.detectChanges();
      }
    });
  }

  goToGraphicCard(graphicCard: GraphicsCard): void {
    this.router.navigate(['graphics-cards', graphicCard._id]);
  }

  onSearch(): void {
    const query = this.form.value.query;
    // Query exists and is longer or equal than 3 characters
    if (query != undefined && query.length >= 3) {
      this.api.searchGraphicsCards(query, this.offset).pipe(take(1)).subscribe((res) => {
        if (res) {
          this.graphicsCards = res;
          this.isSearching = true;
          this.cdr.detectChanges();
        }
      })
    } else {
      this.getAllGraphicCards();
      this.isSearching = false;
    }

    // Scroll to top
    if (this.graphicCardList !== undefined) {
      this.offset = this.initialOffset;
      this.graphicCardList.nativeElement.scrollTop = 0;
    }
  }

  private onScroll = (): void => {
    if (this.graphicCardList !== undefined) {
      const { scrollTop, scrollHeight, clientHeight } = this.graphicCardList.nativeElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        let paginatorValue = Number(this.form.value.paginator);
        if (paginatorValue != null || paginatorValue != undefined) {
          this.offset = paginatorValue;
          this.addItemsOnScroll(this.offset);
        }
      }
    }
  };

  private addItemsOnScroll = (offset: number): void => {
    if (this.isSearching && this.form.value.query != undefined) {
      this.api.searchGraphicsCards(this.form.value.query, offset).pipe(take(1)).subscribe((res) => {
        if (res) {
          this.graphicsCards = res;
          this.cdr.detectChanges();
        }
      })
    } else {
      //Tengo que obtener graphicsCardsLength
      if (this.graphicsCards.length < this.graphicsCardsLength) {
        this.api.getGraphicsCards(this.graphicsCards.length, offset).pipe(take(1)).subscribe((res) => {
          if(res){
            this.graphicsCards = this.graphicsCards.concat(res);
            this.cdr.detectChanges();
          }
        });
      } else {
        console.log("No more items on BE");
      }
    }
  }

}
