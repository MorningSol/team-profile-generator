const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Pat', 43, 'pat@email.com', 'morningsol', "Engineer");

    expect(engineer.name).toBe('Pat');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
});

test('gets employee role', () => {
    const engineer = new Engineer('Pat', 43, 'pat@email.com', 'morningsol', "Engineer");

    expect(engineer.getRole()).toBe('Engineer');
});

test('get github username', () => {
    const engineer = new Engineer('Pat', 43, 'pat@email.com', 'morningsol', "Engineer");

    expect(engineer.getGithub()).toEqual(expect.any(String));
});