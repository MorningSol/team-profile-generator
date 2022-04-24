const Employee = require('./Employee');

class Manager extends Employee{

    constructor(name, id, email, officeNum, role) {
        super(name, id, email);

        this.officeNum = officeNum
        this.role = role
        
    }

    getRole() {
        return this.role
    };

};

module.exports = Manager;