import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NavbarComponent],
    template: `
    <app-navbar></app-navbar>
    <h1>Üdvözöllek az oldalon!</h1>
    <p>Ez egy manuálisan létrehozott teszt komponens</p>`,
    styles: ['h1 {color:red}']
})

export class HomeComponent {

}