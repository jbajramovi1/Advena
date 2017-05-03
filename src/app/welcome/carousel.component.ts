import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})

export class CarouselComponent{
    slide: number=0;
    id;

    next(): void{
        if (this.slide==2) this.slide=0;
        else this.slide++;
        clearInterval(this.id);
        this.id = setInterval(() => {
        this.next(); 
        }, 10000);
    }

    previous(): void{
        if (this.slide==0) this.slide=2;
        else this.slide--;
        clearInterval(this.id);
        this.id = setInterval(() => {
        this.next(); 
        }, 10000);
    }

    ngOnInit():void{

        this.id = setInterval(() => {
        this.next(); 
        }, 10000);
    }

    ngOnDestroy() {
    if (this.id) {
    clearInterval(this.id);
  }
}
} 