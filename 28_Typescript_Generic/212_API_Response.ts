function wrapResponse<T>(statusCode: number, data: T): 
{ statusCode: number; data: T } {
    return { statusCode: statusCode, data: data };
}

let userResp = wrapResponse<string>(200, "admin"); // passed admin data
console.log(userResp);


let flagResp = wrapResponse<boolean>(200, true); // passed boolean data
console.log(flagResp);
