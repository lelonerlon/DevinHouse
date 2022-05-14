import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListFoodComponent } from './pages/list-food/list-food.component';
import { ListDrinkComponent } from './pages/list-drink/list-drink.component';
import { HomeComponent } from './pages/home/home.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'bebidas',
    component: ListDrinkComponent
  },
  {
    path: 'comidas',
    component: ListFoodComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ListFoodComponent,
    ListDrinkComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
