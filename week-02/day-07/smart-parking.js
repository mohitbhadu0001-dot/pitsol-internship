const vehical="car";
let mint=15;
let hourRate;

switch(vehical)
{
    case "car":
    hourRate=40;
    break;
    case "bike":
    hourRate=20;
    break;
    case "van":
    hourRate=60;
    break;
    default :
    hourRate=0;
   
}

if(mint<0 ||hourRate===0)
{
    console.log("invalid parking input");
}
else
{
    mint =mint-15;

    let billHours;

    if(mint%60>0)
    {
        billHours=Math.floor(mint/60);
        billHours+=1;
    }
    else
    {
        billHours=Math.floor(mint/60);
    }

    const uncapped=hourRate*billHours;
    let finalBill=0;

    if(uncapped>250)
    {
        finalBill=250
    }
    else
    {
        finalBill=uncapped;
    }

    console.log(`Vehical : ${vehical}`);
    console.log(`Rent per hour : ${hourRate}`);
    console.log(`Final bill : ${finalBill}`)


    
}

