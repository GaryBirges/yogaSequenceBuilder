import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
images=[]
  constructor(private dragula: DragulaService) { }

  ngOnInit() {
    this.images = new Array(45)
    let dragula=this.dragula.createGroup('originals', {
      removeOnSpill: (target) => {
        return target.id !== 'orig';
      },
      // revertOnSpill: true,
      copy:(el, source) => {
        console.log(source.id === 'orig')
        return source.id === 'orig';
      },
      accepts: (el, target, source, sibling) => {
        return target.id !== 'orig';
      }
    })
  }

}
