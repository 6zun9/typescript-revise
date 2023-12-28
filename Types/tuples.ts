 // Tuples 
 const myType:[number,string] = [1,"my"]

 const colorTuple: [number, number, number ] = [0,45,255];

 type HTTPResponse = [number,string];

 const goodRes: HTTPResponse = [200,"OK"]
 const badRes: HTTPResponse = [404,"Not Found"]
//  goodRes.push(123);

const responses: HTTPResponse[] = [goodRes, badRes] || [[200,"OK"],[404,"Not Found"]];
