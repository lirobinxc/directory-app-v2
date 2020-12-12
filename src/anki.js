class MagicUser extends Person {
		
  constructor(name, type) {
    super(name, type);  // super() references the parent Object prototype
  }
  
  attack() {
    console.log(`${this.name} attacks her ${this.type} powers!`);
  }
  
  taunt() {
    console.log(`${super.introduce()} Prepare to die!!!`);  // you can call parent methods!
  }
}