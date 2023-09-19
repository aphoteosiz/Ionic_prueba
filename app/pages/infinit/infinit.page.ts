import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit',
  templateUrl: './infinit.page.html',
  styleUrls: ['./infinit.page.scss'],
})
export class InfinitPage implements OnInit {
  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infinitescroll: IonInfiniteScroll | any;

  constructor() { }

  ngOnInit() {
  }
  loadData( event: any ) {
    // console.log(event);
    setTimeout(() => {
      if (this.data.length > 50) {
        this.infinitescroll.complete();
        this.infinitescroll.disabled = "true";
        return;
      }
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr)
      // event.target.complete();
      this.infinitescroll.complete();
    },  1500);

  }

}
