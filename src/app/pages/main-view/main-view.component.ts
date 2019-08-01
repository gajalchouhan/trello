import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }


  // Json Data of Boards
  board: Board = new Board('Test Board', [
    new Column('Fantastic Steel Ball', [
      {
        "head": "Director Of Company",
        "userName": 'Mary McClure',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos",
        "img": "./assets/0.jpg"
      },
      {
        "img": "./assets/1.jpg",
        "head": "Software Engineer",
        "userName": 'Albart Mann',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/2.jpg",
        "head": "Direct Application Assistant",
        "userName": 'John Schone',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/3.jpg",
        "head": "Marketing Manger",
        "userName": 'Levis',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      }
    ]),
    new Column('Hande Granite Gloves', [
      {
        "img": "./assets/22.jpg",
        "head": "Director of Engineer",
        "userName": 'Ramsy',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/24.jpg",
        "head": "Accountant",
        "userName": 'Herta Rempel',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
    ]),
    new Column('Tasty Plastic Shirt', [
      {
        "img": "./assets/9.jpg",
        "head": "Sales Head",
        "userName": 'John Snow',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/10.jpg",
        "head": "Developer",
        "userName": 'Hulda Rock',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/13.jpg",
        "head": "Engineering Head",
        "userName": 'Marjory Carroll',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/19.jpg",
        "head": "Head of Department",
        "userName": 'Daisha Schone',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/7.jpg",
        "head": "Blogger",
        "userName": 'Grace Hane',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/8.jpg",
        "head": "Designer Head",
        "userName": 'Danareys',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      }
    ]),
    new Column('Small Plastic Pants', [
      {
        "img": "./assets/22.jpg",
        "head": "Designer Head",
        "userName": 'Peter',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      }
    ]),
    new Column('Practical Plastic Gloves', [
      {
        "img": "./assets/28.jpg",
        "head": "Front Engineer",
        "userName": 'Alisha erox',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/32.jpg",
        "head": "Head of Front end Department",
        "userName": 'Laxy Bore',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      }
    ]),
    new Column('Tasty Rubber Computer', [
      {
        "img": "./assets/2.jpg",
        "head": "Back end Developer",
        "userName": 'Eilijah ros',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/45.jpg",
        "head": "Freasher",
        "userName": 'Elfrado eric',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/42.jpg",
        "head": "Singer",
        "userName": 'Arun Chupa',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/26.jpg",
        "head": "Head of Back-end Developer",
        "userName": 'Alia ericos',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/8.jpg",
        "head": "Musician",
        "userName": 'Little sis Nora',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
    ]),
    new Column('Gorgeous Rubber Fish', [
      {
        "img": "./assets/35.jpg",
        "head": "Band of Rocks",
        "userName": 'Justin',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/32.jpg",
        "head": "Speaker",
        "userName": 'Rihaana Roy',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/28.jpg",
        "head": "Co-Founder",
        "userName": 'Galgadot',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
      {
        "img": "./assets/9.jpg",
        "head": "Investor",
        "userName": 'Gajal Vasita',
        "text": "Loream ipsum dolor sit amet, consectetur adipisicing elit. Libero, Banditos"
      },
    ])
  ]);


  ngOnInit() {
  }

  // This function is use to remove details
  public removeUserDetail(data, index) {
    data.splice(index, 1);
    console.log(data);
  }


// THis function use to drap and drop list
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
