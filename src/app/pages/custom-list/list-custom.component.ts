import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Drink } from '../order/order.component';



@Component({
    selector: 'app-list-component',
    templateUrl: './list-custom.component.html',
})
export class ListCustomComponent {
    @Input() drink:any
    @Output() toggleEvent = new EventEmitter<Drink>();

    toggle(drink: Drink) {
        this.toggleEvent.emit(drink);
    }
}
