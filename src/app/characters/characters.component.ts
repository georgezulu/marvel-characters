import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CharacterService } from '../character.service';

import { Chart } from 'chart.js';
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Object;
  selectedCharacter: Character;
  characterCode: number;
  
  Linechart = [];
  series = [];
  comics = [];

  constructor(private characterService: CharacterService) {
    
   }

  ngOnInit() {
    //this.getCharacters();
    
  }

  getCharacters() {

      this.characterService.getCharacters().subscribe(results => {
        console.log("________________________ " + results);
      this.characters = results;
      console.log(this.characters);
     
    } );
    
    //this.characterService.getCharacters().subscribe(characters => this.characters = characters);
    //this.http.get('https://api.npms.io/v2/invalid-url').subscribe(
    //results => this.characters = results,
    //console.log(this.characters);
  }

  onSelect(character: Character) {

    this.selectedCharacter = character;
    this.characterCode = character.code;
    this.prepareGraph(this.selectedCharacter);
  }

  prepareGraph(character: Character) {

    this.selectedCharacter = character;
    console.log('prepareGraph called!!');
    this.Linechart = new Chart('lineChart', {
      type: 'line',
    data: {
     labels: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12"],
     datasets: [ {
         label: 'DATA1',
         data:[9, 7 , 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
         fill:false,
         lineTension:0.2,
         borderColor:"red",
         borderWidth: 1 },
         {
          label: 'DATA2',
          data:[18, 4 , 13, 7, 14, 10, 4, 9, 15, 3, 6, 12],
          fill:false,
          lineTension:0.2,
          borderColor:"blue",
          borderWidth: 1 }
     ]
    },
    options: {
     title:{
         text:"Line Chart",
         display:true
     },
     legend: {
      display: true
    },
    scales: {  
      xAxes: [{  
        display: true  
      }],  
      yAxes: [{  
        display: true  
      }],  
    }
    }
    });

  }
}
