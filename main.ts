class Employee {
  constructor(
    private _name: string,
    private _age: number,
    private _job: string
  ) {}

  getName() {
    return this._name;
  }

  setName(name: string) {
    this._name = name;
  }

  printName(): void {
    console.log(`${this._name} ${this._age} ${this._job}`);
  }
}

let employee1 = new Employee("홍길동", 20, "백수"); // 힙 메모리에 생성
employee1.printName();
