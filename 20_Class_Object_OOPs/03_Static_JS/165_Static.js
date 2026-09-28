class TestRunner{
        static totalTests = 0;
        static passCount = 0;
        constructor(name, passed){
            this.name = name;
            TestRunner.totalTests++;
            if(passed){
                TestRunner.passCount++;
            }
        }
}
let t1 = new TestRunner("loginTest", true);
let t2 = new TestRunner("signTest", false);
let t3 = new TestRunner("dashboardTest", true);
let t4 = new TestRunner("supportTest", true);
console.log(TestRunner.totalTests);//4
console.log(TestRunner.passCount);//3
console.log(t1.name);//loginTest
console.log(t2.name);//signTest
console.log(t3.name);//dashboardTest
console.log(t4.name);//supportTest
// name - non static
// totalTests - static

/*static variable directly called by class.
In JavaScript, a static variable/property is used when a value should
belong to the class itself,rather than to each individual object.*/