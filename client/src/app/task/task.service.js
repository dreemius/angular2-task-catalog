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
var Observable_1 = require("rxjs/Observable");
var app_service_1 = require("../app.service");
var TaskService = (function () {
    function TaskService(appService) {
        this.appService = appService;
    }
    TaskService.prototype.filterCompletedTasks = function (allItems) {
        return allItems.filter(function (item) { return item.status == true; });
    };
    TaskService.prototype.filterUncompletedTasks = function (allItems) {
        return allItems.filter(function (item) { return item.status == false; });
    };
    TaskService.prototype.satData = function (values) {
        this.tasks = values;
        this.filteredTasks = {
            completed: this.filterCompletedTasks(values),
            uncompleted: this.filterUncompletedTasks(values)
        };
    };
    TaskService.prototype.getFilteredTasks = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.appService.getAllTasks().subscribe(function (values) {
                _this.satData(values);
                observer.next(_this.filteredTasks);
                observer.complete();
            }, function (error) { return console.log(error); });
        });
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map