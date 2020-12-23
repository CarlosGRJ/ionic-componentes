import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;

  superArray: any[] = [];
  publisher: string = 'todos';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged( event ) {
    // console.log("event ", event.detail.value);
    // Al mandar el value vacío no es necesario este if
    // if ( event.detail.value === 'todos' ) {
    //   return this.publisher = '';
    // }

    this.publisher = event.detail.value;
  }

}
