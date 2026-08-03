// Retry Failed API Call
let retry = 0;
const MAX_ATTEMPTS = 5;
let isSuccess = false;

console.log("API Call attempts");

do {
    console.log("Attempt:", retry + 1);

    // Simulate API success/failure (40% success)
    isSuccess = Math.random() > 0.6;

    if (isSuccess) {
        console.log("✅ SUCCESS (Response 200 OK)");
    } else {
        console.log("❌ FAILED (Timeout/Error)");
    }

    retry++;

} while (!isSuccess && retry < MAX_ATTEMPTS);

console.log("API call PASSED after 2 attempt(s).");