import {Component} from '@angular/core'
import {contracts} from '../contracts'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    cart = contracts[1].example
}
