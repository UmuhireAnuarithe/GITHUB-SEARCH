import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserGithubComponent } from './user-github/user-github.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { RepoGithubComponent } from './repo-github/repo-github.component';

@NgModule({
  declarations: [
    AppComponent,
    UserGithubComponent,
    GithubFormComponent,
    RepoGithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
