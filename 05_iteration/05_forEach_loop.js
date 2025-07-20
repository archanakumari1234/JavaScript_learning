const coding = ["JavaScript", "ruby", "python", "java", "cpp"]

coding.forEach((val) =>{
    // console.log(val);
} )

function printMe(item) {
    // console.log(item);
}
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
  console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "python"
    },
    {
        languageName: "cpp",
        languageFileName: "cpp"
    }
]
myCoding.forEach((item) =>{
    console.log(`${item.languageName} => ${item.languageFileName}`);
})
