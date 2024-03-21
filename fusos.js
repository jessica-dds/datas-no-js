// let date = new Date(2021, 0, 1, 13);
// console.log(date); // o javascript não guarda fuso. ELe salva o momento
// console.log(+date); // este número que o Javascript guarda 
// console.log(date.getHours()); // imprime o horário no fuso da minha máquina
// console.log(date.getUTCHours()); // imprime o horário em UTC

// utilizar biblioteca para converter para outras timezones

const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz');

// "2018-09-01T16:01:36.386Z"
const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin');

console.log(utcDate);


const pattern = 'd.M.yyyy HH:mm:ss. SSS \'GMT\' XXX (z) '
const output = format(zonedDate, pattern, { timeZone: 'Europe/Berlin' });

console.log(output);