var printout = "";
function square(sqNums) {
    for (var row = 1; row <= sqNums; row++) {
        for (var col = 1; col <= sqNums; col++) {
            //console.log("#");
            printout += "#";
        }
        //console.log("\n")
        printout += "\n";
    }
    console.log(printout);
}
square(4);
