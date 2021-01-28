import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  value: string = '';

  @Input() roster: Player[];
  @Output() playerFiltered = new EventEmitter<string>();
  @Output() filterReseted = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onChange() {
    setTimeout(() => {
      this.playerFiltered.emit(this.value);
    }, 3000);
  }

  resetFilter() {
    this.value = '';
    this.filterReseted.emit();
  }
}
