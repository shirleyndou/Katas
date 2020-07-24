var printIso = "";
function isosceles(isoNum) {
    for (var row = 1; row <= isoNum; row++) {
        for (var col = void 0; col > row; col--) {
            printIso += " ";
        }
        for (var i = 1; i < (row * 2); i++) {
            printIso += "#";
        }
        printIso += "\n";
    }
    console.log(printIso);
}
isosceles(4);
