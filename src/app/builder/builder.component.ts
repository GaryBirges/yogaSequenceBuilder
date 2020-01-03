import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  images=[]
  originals=[]
  rows=[]
  target=[]
  sequenceName
  sequence =[]

  subs = new Subscription();
  constructor(private dragula: DragulaService) {

  }

  ngOnInit() {
    this.images = new Array(45)
    // this.originals = new Array(45)
    this.rows = new Array(1)
    let dragula=this.dragula.createGroup('originals', {
      removeOnSpill: (target) => {
        return target.id !== 'orig';
      },
      // revertOnSpill: true,
      copy:(el, source) => {
        console.log(source.id === 'orig')
        return source.id === 'orig';
      },
      copyItem:(item) => ({ ...item }),
      accepts: (el, target, source, sibling) => {
        return target.id !== 'orig';
      }
    })
    this.dragula.drop('originals').subscribe((x)=>{
      // setTimeout(() => {
        (console.log(x))
      // }, 1000);
    })
  }
  addRow(){
    this.rows.push(this.rows.length + 1)
  }

  save(name){
    console.log(this.sequence)
    console.log(this.images)
   console.log( name)
  }

}
