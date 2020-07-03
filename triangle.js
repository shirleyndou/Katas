var printoutTri = "";
function triangle(triNum) {
    for (var row = 0; row <= triNum; row++) {
        for (var col = 0; col < row; col++) {
            printoutTri += "#";
        }
        printoutTri += "\n";
    }
    console.log(printoutTri);
}
triangle(4);
