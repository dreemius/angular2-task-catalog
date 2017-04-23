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
var AppService = (function () {
    function AppService() {
        this.desk = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        this.items = [
            { id: 100, name: 'Купить продуктов', description: this.desk, status: true, urgency: 0 /* Hi */, finishTo: new Date('1/1/16') },
            { id: 101, name: 'Сходить в спорзал', description: 'Небыл уже неделю, давно полра', status: false, urgency: 2 /* Low */, finishTo: new Date('5/2/16') },
            { id: 102, name: 'Доделать работу', description: 'Some text 2', status: false, urgency: 0 /* Hi */, finishTo: new Date('1/20/16') },
            { id: 103, name: 'Отослать письмо по работе', description: 'Some text 3', status: true, urgency: 1 /* Middle */, finishTo: new Date('3/2/17') },
            { id: 104, name: 'Написать еще один Ангуляр компонент', description: 'Some text 4', status: false, urgency: 0 /* Hi */, finishTo: new Date('1/12/15') },
            { id: 105, name: 'Пополнить счет на телефоне', description: 'Some text 2', status: false, urgency: 2 /* Low */, finishTo: new Date('1/20/16') },
            { id: 106, name: 'Посмотреть фильм', description: 'Some text 3', status: true, urgency: 1 /* Middle */, finishTo: new Date('3/2/17') },
            { id: 107, name: 'Test8', description: '', status: false, urgency: 0 /* Hi */, finishTo: new Date('1/12/15') }
        ];
    }
    AppService.prototype.getAllTasks = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            setTimeout(function () {
                observer.next(_this.items);
                observer.complete();
            }, 800);
        });
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map