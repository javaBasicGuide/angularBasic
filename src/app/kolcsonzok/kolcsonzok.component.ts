import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { KolcsonzesekComponent } from '../kolcsonzesek/kolcsonzesek.component';


@Component({
  selector: 'app-kolcsonzok',
  templateUrl: './kolcsonzok.component.html',
  styleUrl: './kolcsonzok.component.css'
})
export class KolcsonzokComponent {
  kolcsonzok: any[] = [];

  constructor( private base : BaseService){}

  ngOnInit(){
    this.getKolcsonzok();
  }
  getKolcsonzok(){
    this.base.getKolcsonzok().subscribe((result:any) => { console.log(result), this.kolcsonzok=result })
  }

}
