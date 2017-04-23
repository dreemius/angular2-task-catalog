"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_service_1 = require("./task.service");
var task_interface_1 = require("./../models/task.interface");
var TaskComponent = (function () {
    function TaskComponent(taskService) {
        this.taskService = taskService;
        this.isLoaded = false;
        this.isCompletedVisible = false;
        this.urgencyMap = task_interface_1.UrgencyMap;
        this.filteredTasks = {
            completed: [],
            uncompleted: []
        };
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getFilteredTasks().subscribe(function (values) {
            _this.filteredTasks = values;
            _this.isLoaded = true;
        }, function (error) { return console.log(error); });
        /*  Пример вызова Observable напрямую из сервиса похоже на Promise
            this.taskService.getAllTasks()
            .subscribe(values => {
                // do something with values
            },
            error => console.log(error))
        */
    };
    TaskComponent.prototype.toggleCompleted = function () {
        this.isCompletedVisible = !this.isCompletedVisible;
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "task",
        templateUrl: "task.component.html",
        styleUrls: ["task.component.css"]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map