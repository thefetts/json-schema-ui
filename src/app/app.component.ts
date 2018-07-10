import {Component, OnInit} from '@angular/core'
import {contracts} from './contracts'

declare var require: any
const tv4 = require('tv4')

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    schemas = contracts
    selectedSchema
    schema
    data
    message: string
    errors

    ngOnInit() {
        this.selectedSchema = contracts[0]
        this.updateTextAreas()
    }

    updateTextAreas() {
        this.schema = JSON.stringify(this.selectedSchema.schema, null, 2)
        this.data = JSON.stringify(this.selectedSchema.example, null, 2)
    }

    validate() {
        try {
            const schemaObject = JSON.parse(this.schema.trim())
            const dataObject = JSON.parse(this.data.trim())
            const validation = tv4.validateMultiple(dataObject, schemaObject)

            if (validation.errors.length) {
                this.message = null
                this.errors = validation.errors
            } else {
                this.message = 'No errors! Good job!'
                this.errors = null
            }
        } catch (error) {

        }
    }

    //function getSnippet(data, jsonPath) {
    //         const paths = jsonPath.substring(1).split('/');
    //         const key = paths.pop();
    //
    //         let snippet = data;
    //         paths.forEach(path => snippet = snippet[path]);
    //
    //         const string = JSON.stringify(snippet, null, 2);
    //         return string.replace(`"${key}":`, `<strong class="louder">"${key}":</strong>`);
    //     }
}
