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
var StatisticsService = (function () {
    function StatisticsService(appService) {
        this.appService = appService;
        this.statistics = {
            all: 0,
            completed: 0,
            uncompleted: 0,
            urgent: 0
        };
    }
    StatisticsService.prototype.generateStatistics = function (values) {
        var _this = this;
        values.forEach(function (item) {
            _this.statistics.all++;
            if (item.status == true) {
                _this.statistics.completed++;
            }
            if (item.status == false) {
                _this.statistics.uncompleted++;
            }
            if (item.urgency == 0) {
                _this.statistics.urgent++;
            }
        });
    };
    StatisticsService.prototype.getStatistics = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.appService.getAllTasks().subscribe(function (values) {
                console.log(values);
                _this.generateStatistics(values);
                observer.next(_this.statistics);
                observer.complete();
            }, function (error) { return console.log(error); });
        });
    };
    return StatisticsService;
}());
StatisticsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], StatisticsService);
exports.StatisticsService = StatisticsService;
//# sourceMappingURL=statistics.service.js.map