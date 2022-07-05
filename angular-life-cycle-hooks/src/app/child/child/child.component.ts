import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, 
AfterContentInit, AfterContentChecked, AfterViewInit {

  counter: number = 0;
  interval: any;

  @Input() 
  channelName: string = "";

  @ContentChild('projectedContent', {static: true}) projectedContent: any;
  @ViewChild('childContent', {static: false}) childContent: any; // jika set false, maka awalnya akan undefined (tdk bisa di akses)

  constructor() { 
    console.log("Child Constructor is called");
  }

  ngOnInit(): void {
    console.log("Child OnInit is called");

    console.log("OnInit - " + this.projectedContent);

    // this.interval = setInterval(() => {
    //   this.counter++;
    //   console.log("this.counter ", this.counter);
    // }, 1000);
  }

  ngOnDestroy(): void {
    // clear interval once the component destroyed, 
    //if we didn't do this, the component interval would be multiplied everytime we toggle this chilc component
    // clearInterval(this.interval); // the counting interval stops after this
    
    console.log("Child OnDestroy is called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("Child OnChanges is called");
    console.log("Child OnChanges - " + this.projectedContent);
    console.log("Child OnChanges - " + this.childContent);
  }

  ngDoCheck() {
    console.log("Child DoCheck is called");
    console.log("Child DoCheck - " + this.projectedContent);
    console.log("Child DoCheck - " + this.childContent);
  }

  ngAfterContentInit() {
    console.log("Child ngAfterContentInit is called");
    console.log("Child AfterContentInit - " + this.projectedContent);
    console.log("Child ngAfterContentInit - " + this.childContent);
  }

  ngAfterContentChecked() {
    console.log("Child ngAfterContentChecked is called"); 
    console.log("Child ngAfterContentChecked - " + this.childContent);
  }

  ngAfterViewInit() {
    console.log("Child ngAfterViewInit is called"); 
    console.log("Child ngAfterViewInit - " + this.childContent);
  }

  ngAfterViewChecked() {
    console.log("Child ngAfterViewChecked is called"); 
  }

}
