let responseCode: number[] = [200, 201, 404, 500, 302, 403];

function getFailedCodes(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {
        return code >= 400;
    });
}

console.log("All Codes", responseCode);//All Codes [ 200, 201, 404, 500, 302, 403 ]
console.log("Failed Codes", getFailedCodes(responseCode));//Failed Codes [ 404, 500, 403 ]