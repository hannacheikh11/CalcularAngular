import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent  {

  public number1 : any;
  public number2 : any;
  public result : any;
  @Output() changeResult = new EventEmitter<string | number>();
  public add(){
      this.result = parseInt(this.number1) +parseInt( this.number2)
  }
  public mul(){
    this.result = parseInt(this.number1) * parseInt( this.number2)
}

public div(){
  this.result = parseInt(this.number1) / parseInt( this.number2)
}
}



