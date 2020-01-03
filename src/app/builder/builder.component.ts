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
    // this.images = new Array(45)
    this.images = [
      {name:"image1", id:1, src:''},
      {name:"image2", id:2, src:''},
      {name:"image3", id:3, src:''},
      {name:"image4", id:4, src:''},
      {name:"image5", id:5, src:''},
      {name:"image6", id:6, src:''},
      {name:"image7", id:7, src:''},
      {name:"image8", id:8, src:''}
    ]
    // this.originals = new Array(45)
    this.rows = new Array()
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
    this.rows.push({})
    this.rows[this.rows.length-1].sequence=[]
  }

  save(name){
    console.log(this.rows)
    console.log(this.sequence)
    console.log(this.images)
   console.log( name)
  }

}
