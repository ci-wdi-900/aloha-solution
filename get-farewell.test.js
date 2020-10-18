const getFarewell = require('./get-farewell.js');


describe('getFarewell', () => {
    it(`returns a farewell phrase for the given language`, () => {
        const result1 = getFarewell('arabic');
        expect(result1).toBe("ma'as as-salaama");
        const result2 = getFarewell('czech');
        expect(result2).toBe('sbohem');
        const result3 = getFarewell('luganda');
        expect(result3).toBe('weeraba');
    });

    it(`is case-insensitive`, () => {
        const result1 = getFarewell('Arabic');
        expect(result1).toBe("ma'as as-salaama");
        const result2 = getFarewell('KOREAN');
        expect(result2).toBe('annyeong');
        const result3 = getFarewell('tIbEtAn');
        expect(result3).toBe('gah-leh pheb');
    })
})
