import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {FormsModule} from "@angular/forms";
import { FruitComponent } from './fruit/fruit.component';
@NgModule({
    declarations: [
        AppComponent,
        CarouselComponent,
        FruitComponent

    ],
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        CarouselModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
