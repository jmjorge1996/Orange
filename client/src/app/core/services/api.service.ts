import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, of, switchMap, tap, throwError  } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { GraphicsCard } from 'src/app/shared/models/GraphicCard';
import { graphicsCardsSelectors } from '../store/selector';
import { SetGraphicsCards } from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiRoute:string = `${location.protocol}//${location.hostname}:5000`

  constructor(private http: HttpClient, private store: Store) { }

  getGraphicsCards(position: number = 0, offset: number = 10): Observable<GraphicsCard[]> {
    return this.store.pipe(
      select(graphicsCardsSelectors.getGraphicCards(position, offset)),
      switchMap((graphicCards) => {
        if(graphicCards.length){
          return of(graphicCards);
        }else{
          return this.http.get<GraphicsCard[]>(`${this.apiRoute}/graphics-cards/?position=${position}&offset=${offset}`)
            .pipe(
              tap((graphicsCards)=>{
                if (graphicsCards.length > 0) {
                  this.store.dispatch(new SetGraphicsCards(graphicsCards));
                }
              })
            )
        }
      }),
      catchError((error)=> throwError(error))
    )
  } 

  searchGraphicsCards(query: string, offset?: number): Observable<GraphicsCard[]> {
    return this.http.get<GraphicsCard[]>(`${this.apiRoute}/graphics-cards/?s=${query}&offset=${offset}`);
  }

  getGraphicCardById(id: string): Observable<GraphicsCard>{
    return this.http.get<GraphicsCard>(`${this.apiRoute}/graphics-cards/${id}`);
   }
}
