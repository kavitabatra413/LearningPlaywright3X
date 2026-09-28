let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function(result, index){
            console.log("Test " + index + " -> " + result)
});

// "All done" prints LAST because forEach is synchronous — it finishes all 4 iterations first, then moves on.

/*
Test 0 -> PASS
Test 1 -> FAIL
Test 2 -> PASS
Test 3 -> SKIP
*/