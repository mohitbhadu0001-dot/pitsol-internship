const memberShip="standard";
const days=2
;
let dayCharge;

switch(memberShip)
{
    case "standard":
    dayCharge=5;
    break;
    case "student":
    dayCharge=3;
    break;
    case "senior":
    dayCharge=2;
    break;
    default :
    dayCharge=0;
   
}

if(days<0 || dayCharge===0)
{
    console.log("invalid  input");
}
else 
if(days<=2)
{
    console.log("no charge : ");
}
else
{
    const totalbill=dayCharge*days;

    console.log(`Total Bill is  : ${totalbill}`);
}