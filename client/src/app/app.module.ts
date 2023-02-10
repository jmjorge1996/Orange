import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { appReducer } from './core/store/reducer';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphicsCardListComponent } from './graphics-card-list/graphics-card-list.component'; 
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GraphicCardItemComponent } from './graphic-card-item/graphic-card-item.component';
import { GraphicsCard } from 'src/app/shared/models/GraphicCard';
import { AppState } from './core/store/state';
import { GraphicCardItemDataComponent } from './graphic-card-item-data/graphic-card-item-data.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphicsCardListComponent,
    GraphicCardItemComponent,
    GraphicCardItemDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({ graphicsCards: appReducer } as ActionReducerMap<any, any>)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
