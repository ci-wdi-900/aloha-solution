const getGreeting = require('./get-greeting.js');


describe('getGreeting', () => {
    it(`returns a greeting for the given language`, () => {
        const greeting1 = getGreeting('english');
        expect(greeting1).toBe('hello');
        const greeting2 = getGreeting('spanish');
        expect(greeting2).toBe('hola');
        const greeting3 = getGreeting('japanese');
        expect(greeting3).toBe('konnichiwa');
    });

    it(`is case-insensitive`, () => {
        const greeting1 = getGreeting('English');
        expect(greeting1).toBe('hello');
        const greeting2 = getGreeting('ZULU');
        expect(greeting2).toBe('sawubona');
        const greeting3 = getGreeting('rUsSiAn');
        expect(greeting3).toBe('zdravstvuyte');
    })
})
