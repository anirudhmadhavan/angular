import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
   selector: 'star',
   templateUrl: './star.component.html',
   styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
   // Input to component from container component
   @Input() rating: number;
   starWidth: number;
   // Output from child component - event, .emit will throw an event, similar to button's onClick - parent has to listen and take appropriate action
   @Output() childEvent: EventEmitter<string> = new EventEmitter<string>();

   // Called whenever any @Input properties changes
   ngOnChanges(_changes: SimpleChanges): void {
      this.starWidth = (this.rating * 75) / 5;
   }

   // This is an event which is triggered whenever child component is clicked. This throws an event for the parent to catch.
   onClick() {
      this.childEvent.emit(` ${this.rating} rating clicked`);
   }
}
