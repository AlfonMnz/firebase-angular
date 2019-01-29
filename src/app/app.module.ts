import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './body/home/home.component';
import {FooterComponent} from './footer/footer.component';
import {TasksComponent} from './body/tasks/tasks.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tasks', component: TasksComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        TasksComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot(appRoutes, {enableTracing: false})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
