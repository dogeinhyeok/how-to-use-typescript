/**
 * 인터페이스와 클래스
 */

// 인터페이스
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 클래스
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}

const character = new Character("이정환", 10, "developer");
console.log(character);
