const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Pat', 43, 'pat@email.com', 'Everest', "Intern");

    expect(intern.name).toBe('Pat');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
});

test('gets employee role', () => {
    const intern = new Intern('Pat', 43, 'pat@email.com', 'Everest', "Intern");

    expect(intern.getRole()).toBe('Intern');
});

test('get interns school', () => {
    const intern = new Intern('Pat', 43, 'pat@email.com', 'Everest', "Intern");

    expect(intern.getSchool()).toEqual(expect.any(String));
});