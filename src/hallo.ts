import { createHash } from 'crypto';

export function hallo(name: string) {
    const hash = createHash('sha256').update(name).digest('hex');
    return `Hallo ${name}, your hash is ${hash}`;
}
