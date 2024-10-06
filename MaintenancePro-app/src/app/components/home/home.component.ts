import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    template: `
    <h1>Üdvözöllek az első Angular projektem oldalán!</h1>
    <p>Ez egy manuálisan létrehozott teszt komponens</p>`,
    styles: ['h1 {color:red}']
})

export class HomeComponent {

}