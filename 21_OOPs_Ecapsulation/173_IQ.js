class Bug {
  constructor(title, severity) {
    this.title = title;
    this.severity = severity;
  }
  display() {
    console.log("[" + this.severity + "] " + this.title);
  }
}
let b1 = new Bug("Login crash", "Critical");//[Critical] Login crash
let b2 = new Bug("Typo in footer", "Low");//[Low] Typo in footer

b1.display();
b2.display();