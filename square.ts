let printout : string = "";
function square(sqNums: number){
    for(let row=1; row<=sqNums; row++){
        for(let col=1; col<=sqNums; col++){
            //console.log("#");
            printout += "#"
        }
        //console.log("\n")
        printout += "\n"
    }
    console.log(printout);
}

square(4);