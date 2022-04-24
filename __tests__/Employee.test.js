const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Pat', 24, 'pat@hotmail.com');

    expect(employee.name).toEqual('Pat');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual('pat@hotmail.com')

});

test('gets employee name', () => {
    const employee = new Employee('Pat', 24, 'pat@hotmail.com') ;

    expect(employee.getName()).toEqual('Pat');
});

test('gets employee ID number', () => {
    const employee = new Employee('Pat', 24, 'pat@hotmail.com') ;

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email address', () => {
    const employee = new Employee('Pat', 24, 'pat@hotmail.com') ;

    expect(employee.getEmail()).toEqual(expect.any(String));
});