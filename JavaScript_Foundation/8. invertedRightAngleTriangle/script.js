

function fun(){
    const n = document.getElementById("input").value;
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            document.write("*" + "");
        }
        document.write("<br>");
    }
    return
}

document.getElementById("btnClick").addEventListener("click",
    fun
)


// for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//         document.write("*"+" ");
//     }

//     document.write("<br>");

//     for (let k = 1; k <= i; k++) {
//         document.write("&nbsp &nbsp")
//     }
// }