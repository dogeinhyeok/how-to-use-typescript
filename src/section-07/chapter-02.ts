/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동"; // private 변수는 외부 변경 불가
// employee.age = 30; // protected 변수는 외부 변경 불가
employee.position = "designer";

console.log(employee);

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    this.age;
    // this.name;
  }
}

const executiveOfficer = new ExecutiveOfficer("이정환", 27, "developer", 1);
console.log(executiveOfficer);
