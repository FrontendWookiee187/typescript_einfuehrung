import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PersonInterface } from './interfaces/person.interfaces'; // Import the interface


 //interfaces

  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  theString = "das ist ein String";
  theNumber = 42;
  theBoolean = true;

  theUndefined = undefined;
  theNull = null;

  theTypeless: string;
  theArray: (number | string)[] = [1,2];

  //literals 

  noteType: "trash" | "note" = "trash";
  noteTypeTwo: 200 | 404 = 404;

  //tupels

  theArrayTupel: [string, number] = ["200", 404];
  theArrayTupelTwo: [string, 200 | 404] = ["200", 404];


  //types bei Objekten 

  person: {
  //readonly vor z.B. Name macht es unveränderbar
    name: string | number;
    age: number;
    position?: string;
  } = {
    name: "Florian",
    age: 50,
    
  };

  //interfaces

personInterface: PersonInterface = {
    name: "Florian",
    age: 50,
    
  };

  //Tipps und Tricks (pop() Funktion, if() Abfrage nutzen) 

  fruit = "";
  fruitList = ["Banana"];
 


  constructor() {
    this.theTypeless = "dadadad";
    this.theArray = [1,"6"];
    this.add(1,2);

    this.noteType ="note";
    this.noteTypeTwo = 200;

    this.theArrayTupel = ["404", 404];
    this.theArrayTupelTwo = ["200", 200];

    this.person.name = 12;

    this.personInterface.position = "12"

    let banana = this.fruitList.pop();
    if (banana!= undefined) {
      this.fruit = banana;
    } else {
      banana;
    }

    

  }

  add(a: number,b: number){
    return a + b;
  }

  
}
