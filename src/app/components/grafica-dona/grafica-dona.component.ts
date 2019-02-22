import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  // @Input() data:string
  // @Input() labels:string
  // @Input() chartType:string
  @Input() data:any;

  
  constructor() { 
   
    
  }

  ngOnInit() {
    console.log("data",this.data);
  }

}
