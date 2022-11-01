import * as Bcrypt from 'bcrypt';

const rounds: number = 15;

export function getHashedText(plainText: string): string {
  return Bcrypt.hashSync(plainText, rounds);
}

export function comparePlainAndHashedText(
  plainText: string,
  hashedText: string,
): boolean {
  return Bcrypt.compareSync(plainText, hashedText);
}
