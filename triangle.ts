let printoutTri : string = ""
function triangle(triNum : number){
    for(let row : number=0; row<=triNum; row++){
        for(let col : number=0; col<row; col++){
            printoutTri += "#"
        }
        printoutTri += "\n"
    }
    console.log(printoutTri)
}
triangle(4)

