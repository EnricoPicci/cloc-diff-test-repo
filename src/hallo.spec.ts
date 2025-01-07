import { expect } from 'chai';
import { hallo } from './hallo';

describe(`Hallo`, () => {
    it(`should say Hallo to someone`, () => {
        const name = 'Someone';
        const result = hallo(name);
        expect(result.startsWith(`Hallo ${name}`)).to.be.true;
        expect(result).to.match(new RegExp(`^Hallo ${name}, your hash is [a-f0-9]{64}$`));
    });
});
