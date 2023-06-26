import { Component } from "@angular/core";
import { CrudService } from "../crud.service";


@Component({
    selector : 'app-game',
    templateUrl : './game.component.html'
})
export class GameComponent{

    gameTitle = "GTA";
    btnDisabled = true;
    gameStatus = "";
    constructor(public crudService : CrudService){

        setTimeout(()=>{
            this.btnDisabled = false;
            this.crudService.setDataToBeShared(this.gameTitle)
        }, 2000)
    }

    getGameTitle(){
        return this.gameTitle
    }

    onGameStatusChange(){
        this.gameStatus = "Game Started";
    }
    onGameTitleChange(event:any){
        console.log(event.target.value);
        this.gameTitle = event.target.value;
    }
    /*
        Data Binding

        .ts --> .html
        1) String Interpolation
        2) Property Binding

        .html ---> .ts
        3) Event Binding

        4) Two way Binding Communication in both direction

        1) Create A button
        2) Create an input field username
        3) Create a paragraph which displays the username on click of the button
        3) The button should be disabled if the username is an empty string
    */
}
