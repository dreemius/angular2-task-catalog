import { Component, OnInit, ViewChild } from '@angular/core';
import { Task, FilteredTasks, UrgencyMap } from "./../../models/task.interface";
import { ActivatedRoute, Params } from "@angular/router";
import { AppService } from "./../../app.service";
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: '[task-edit]',
    templateUrl: 'task-edit.component.html',
    styleUrls: ["task-edit.component.css"]
})

export class TaskEditComponent implements OnInit {
    task: Task;
    userId: number;
    isLoaded: boolean = false;
    urgencyList: object[] = UrgencyMap;
    @ViewChild('taskForm') tForm: NgForm;

    constructor(
        private route: ActivatedRoute,
        private appService: AppService
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.userId = params['id'];
            console.log(params);
        }); 
        this.initTask();
        this.isLoaded = true;   
     }

     initTask() {
         this.task = this.appService.getTaskById(this.userId);
         if(!this.task) { 
             this.task = this.createEmptyTask();
          }
     }

     createEmptyTask(): Task {
         return {id: -1, name: '', description: '', status: false, urgency: 0, 
                        finishTo: new Date('1/12/18'), finishToStr: '2017-12-22'};
     }

     createTask() {
        console.log(this.tForm);
     }
}