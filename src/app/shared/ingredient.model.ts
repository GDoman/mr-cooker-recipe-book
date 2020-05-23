// export class Ingredient {
//   public name: string;
//   public amount: number;

//   constructor(name: string, amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }

// this is a shortcut for code above
export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
