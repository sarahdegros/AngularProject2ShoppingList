export class Ingredient {
  constructor(public name: string, public amount: number) {
    this.name = name || 'ingredient';
    this.amount = amount || 1;
  }
}
