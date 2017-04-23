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
var TaskEditComponent = (function () {
    function TaskEditComponent() {
        this.isLoaded = false;
        this.foods = [
            { value: '0', viewValue: 'Срочно' },
            { value: '1', viewValue: 'Нормально' },
            { value: '2', viewValue: 'Не срочно' }
        ];
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        this.isLoaded = true;
    };
    return TaskEditComponent;
}());
TaskEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'task-edit',
        templateUrl: 'task-edit.component.html',
        styleUrls: ["task-edit.component.css"]
    }),
    __metadata("design:paramtypes", [])
], TaskEditComponent);
exports.TaskEditComponent = TaskEditComponent;
//# sourceMappingURL=task-edit.component.js.map