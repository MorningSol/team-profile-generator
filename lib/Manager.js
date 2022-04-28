const Employee = require('./Employee');

class Manager extends Employee{

    constructor(name, id, email, officeNum, role) {
        super(name, id, email);

        this.officeNum = officeNum
        this.role = role
        
    }
    getOfficeNum() {
        return this.officeNum
    };

    getRole() {
        return this.role
    };

};

module.exports = Manager;