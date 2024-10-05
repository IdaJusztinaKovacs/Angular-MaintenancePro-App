import { Component } from "@angular/core";

@Component({
    selector: 'app-test',
    standalone: true,
    template: `
    <h1>Üdvözöllek az oldalon!</h1>
    <p>Ez egy manuálisan létrehozott teszt komponens</p>`,
    styles: ['h1 {color:red}']
})

export class TestComponent {

}