console.log("ok");
function update(){
    let bill = Number(document.getElementById("bill").value);
    let tip = Number(document.getElementById("tip_input").value);
    let split = Number(document.getElementById("split_input").value);
    let tip_value = (bill*tip)/100;
    let tip_each = tip_value/split;
    let bill_each = (bill + tip_value)/split;
    let total_bill = bill_each*split;
    console.log(typeof tip_value);
    tip_value = tip_value.toFixed(2);
    total_bill = total_bill.toFixed(2);
    tip_each = tip_each.toFixed(2);
    bill_each = bill_each.toFixed(2);
    
    document.getElementById("tip_percent").innerHTML = tip+ "%";
    document.getElementById("tip_value").innerHTML = "$ " + tip_value ;
    document.getElementById("split_value").innerHTML =  split + " Person" ;
    document.getElementById("tip_each").innerHTML = "$ " + tip_each ;
    document.getElementById("bill_each").innerHTML = "$ " + bill_each ;
    document.getElementById("total_with_tip").innerHTML = "$ " + total_bill ;
    
}
let container = document.getElementById("container");
container.addEventListener("input" , update);
