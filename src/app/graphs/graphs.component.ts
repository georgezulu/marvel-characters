import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  @Input() character: Character;
  LineChart = [];
  
  ngOnInit() {
    
            
  }
}