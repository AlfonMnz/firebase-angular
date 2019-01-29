import {Injectable} from '@angular/core';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    taskList: AngularFireList<any>;

    constructor(private firebase: AngularFireDatabase) {
    }

    getProduct() {
        return this.taskList = this.firebase.list('tasks');
    }
}
