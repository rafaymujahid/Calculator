// function foo(greet){
// alert(greet)
// }
// function clickBtn(){
//     alert("Click")
// }
// function setName(){
//     var name = document.getElementById("xyz")
//    name.value = "ghous";
//    var para = document.getElementById("para");
//    para.innerHTML= "Hello this is example"
// }
// setName()

function getNumber(num){
    console.log(num)
    var result = document.getElementById("result");
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("result");
result.value = ""
}
function getResult(){
    var result = document.getElementById("result");
  result.value = eval(result.value)
}
