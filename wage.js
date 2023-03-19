const wage = 80;
const parttime = 4;
const fulltime = 8;

var random = Math.floor(Math.random()*3);
var totalwage = 0;

switch(random){
    case 0:
        console.log('emp is absent');
        break;
    case 1:
        console.log('fulltime present');
        totalwage = wage * fulltime;
        break;
    case 2:
        console.log('partime present');
        totalwage = wage * parttime;
        break;
}