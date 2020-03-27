function calculateResult() {
    //store the data  of  inputs
    var valueN=document.getElementById("valueN").value;
    var selectCurrency=document.getElementById("selectCurrency").value;
    var dollar=document.getElementById("dollar").value;
    var euro=document.getElementById("euro").value;
    
    var a, b;
   
    //Quick validation
    if(valueN==="" || valueN==0) {
        window.alert("please enter the value of the currency to convert");
        return; 
        };
        
        a=valueN * selectCurrency;
       // b=valueN * euro;
        
    if(dollar) {
        document.getElementById("resultdl").innerHTML="N" + a;
        document.getElementById("result").style.display ="block";
        document.getElementById("resultdl").style.display = "block";
       
    } else if(euro) {
        document.getElementById("resultdl").innerHTML="N" + b;
        document.getElementById("result").style.display ="block";
        document.getElementById("resultdl").style.display = "block";
    
    } else{
        window.alert("please choose the currency to convert");
    }return;
    
};

//hiding the result display area
document.getElementById("result").style.display ="none";
document.getElementById("resultdl").style.display = "none";

//calling the calculate function

document.getElementById("calculate").onclick = function() {calculateResult();};