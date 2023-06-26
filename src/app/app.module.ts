import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { TestComponent } from './test/test.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './server/servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TestComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
