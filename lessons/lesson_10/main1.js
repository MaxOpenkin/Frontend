
const a = 2;

const res = Math.pow(a, 3);  // Prevedenie v stepen chisla a
console.log(res);

const res2 = Math.floor(10.7); // Okruglenie k minimum
console.log(res2);

const testRes = parseInt('sjksnfjksdf'); //privedenie stroki k chislu, esli stroka ne chislo - to vernet NaN (ne chislo)
console.log(typeof testRes);
console.log(testRes);

// Math.max - ne rabotaet s massivom - vozvraschaet NaN
const array = [1, 10, 6, 7];
const res4 = Math.max(...array); // a vot tak rabotaet s ... (raspakovka znachenia massiva s stroku ili objectov, destructurizacia)
const res44 = Math.min(...array);
console.log(res4);
console.log(res44);

