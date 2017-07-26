import { Component } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from "@angular/animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations : [trigger('marcher', [transition('off <=> on', animate(5000, keyframes([
        style({transform: '*', offset: 0}),
        style({transform: 'translateX('+(window.innerWidth - 75)+ 'px)', offset: 0.5}),
        style({transform: 'translateX(0px)', offset: 1}),
    ])))
    ])
    ]
})
export class AppComponent {
    title = 'app';
    setInt;
    titleone = 'Bienvenue chez les codeurs';
    lore = 'Attendue depuis le 1er mars, conformément à un calendrier établi par Google, la version stable d’Angular 4.0' +
        ' vient enfin d\'être mise à la disposition des développeurs. Avant d\'entrer dans les nouveautés de cette version, l\'équipe' +
        ' Angular annonce aux développeurs qu\'Angular 4 est compatible avec Angular 2.x.x pour la plupart des applications,' +
        ' histoire de les rassurer après l\'expérience douloureuse de rupture de compatibilité entre Angular 1 et Angular 2 ;' +
        ' ce qui a été causé par la réécriture totale du framework avec de nouvelles API et de nouveaux modèles.';
    btn = 'Afficher date';
    display = false;
    public date = new Date();
    alerte = "Angular";
    languages = ['html', 'css', 'js', 'php', 'C'];
    public left = 0;
    public posX = 0;
    stateExpression ='off';

    public affichageDate() {
        this.display = !this.display;
    }

    public affichageAlert() {
        alert('Angular c est nul !!!!');
    }

    marche(){
        this.stateExpression = 'off' ? 'on' : 'off';
        this.animer();
        clearInterval(this.setInt);
        this.setInt = setInterval(() => {
            this.animer();
        }, 200);
    }
    public animer(){
        const images = document.getElementById('img');
        this.posX -= 79;
        images.style.backgroundPositionX = this.posX + 'px';
    }
}