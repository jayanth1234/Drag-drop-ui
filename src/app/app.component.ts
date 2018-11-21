import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  playerList = [
    'Virat Kohli',
    'Ab deVilliers',
    'Kedar jadhav',
    'K L Rahul',
    'Chris Gayle',
    'Marcus Stoinis',
    'Tim Southee',
    'Umesh Yadav',
    'Brendon McCullum',
    'Colin de Grandhome',
  ]
  
  teamA = [
    
  ];

  teamB = [
    
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data,
                        event.previousIndex, event.currentIndex);
    }

    if(event.previousContainer.data.length === 0){
      document.getElementById("players").remove();
      alert("All Players are selected!!")
    }
    
  }
}
