const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Pat', 43, 'pat@email.com', 665, "Manager");

    expect(manager.name).toBe('Pat');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
});

test('gets employee role', () => {
    const manager = new Manager('Pat', 43, 'pat@email.com', 665, "Manager");

    expect(manager.getRole()).toBe('Manager');
})
