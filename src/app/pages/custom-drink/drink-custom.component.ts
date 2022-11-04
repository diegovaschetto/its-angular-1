import { Component, Input} from '@angular/core';




@Component({
    selector: 'app-drink-component',
    templateUrl: './drink-custom.component.html',
})
export class DrinkCustomComponent {
    @Input() drink:any
}
