import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<any> | undefined;

  @ViewChild(IonList) ionlist: any = IonList;



  constructor(private dataservice:DataService) { }

  ngOnInit() {
   this.usuarios= this.dataservice.getUsuarios()
  }
  favorite(user:any){
    console.log('favorite', user);
    this.ionlist.closeSlidingItems();
  }
  share(user:any){
    console.log('share',user);
    this.ionlist.closeSlidingItems();
  }
  delete(user: any) {
    console.log('delete', user.name);

    this.ionlist.closeSlidingItems();
}
}
