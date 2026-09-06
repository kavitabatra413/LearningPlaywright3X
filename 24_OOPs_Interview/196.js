"use strict";
let responseCode = [200, 201, 404, 500, 302, 403];
function getFailedCodes(codes) {
    return codes.filter(function (code) {
        return code >= 400;
    });
}
console.log("All Codes", responseCode);
console.log("Failed Codes", getFailedCodes(responseCode));
