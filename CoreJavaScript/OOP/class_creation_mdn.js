/**
 * Created by p.nikov on 31.3.2015 г..
 */
"use strict";

var Employee = function(){
    this.name = '';
    this.dept = 'general';
};

var Manager = function(){
    Employee.call(this);
    this.report = [];
};

Manager.prototype = Object.create(Employee.prototype);

var WorkerBee = function(){
    Employee.call(this);
    this.projects = [];
};

WorkerBee.prototype = Object.create(Employee.prototype);


var SalesPerson  = function(){
    WorkerBee.call(this);
    this.dept = "sales";
    this.quota = 100;
};

SalesPerson.prototype = Object.create(WorkerBee.prototype);

var Engineer = function(){
    WorkerBee.call(this);
    this.dept = "engineering";
    this.machine = "";
};

Engineer.prototype = Object.create(WorkerBee.prototype);


var jim = new Engineer;

jim.name = "Jim";
jim.machine = "Space ship";

console.log(jim);
