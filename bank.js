function ui()
{
    window.location="signup.html"
}
 function signup()
{
    var u=document.getElementById("us").value;
   var e=document.getElementById("em").value;
   var p=document.getElementById("ps").value;
   alert("account created");
   window.location="login pafe.html";
}

function login()
{
    var u=document.getElementById("us").value;
   var p=document.getElementById("ps").value;

    if(u=="monika" && p=="2244")
    {
        alert("login success");
        window.location="all options.html";
    }
    else
    {
        alert("user not found  u");
        window.location="login pafe.html";
    }
 
}
function depositeform()
{
    window.location="deposite.html"
}
function withdrawlform()
{
    window.location="withdrawl form.html"
} 
var bal=500;
function withdrawl()
{
    var holder=document.getElementById("hh").value;   
    var accno=document.getElementById("acc").value;
    var amm=parseInt(document.getElementById("wi").value);
    if(holder=="monika" && accno=="123456")
    {
    if(bal<amm)
    {
        alert("balance not found");
    }
    else
    {
        bal=bal-amm;
         alert("withdrawl your amount"+amm);
        alert("total amount"+bal);
    }
    }
    else
    {
        alert("details not available");
    }
}
var bal=500;
function deposite()
{
 var hn=document.getElementById("hh").value;   
 var an=document.getElementById("aa").value;
 var ann=parseInt(document.getElementById("am").value);
 if(hn=="monika" && an=="123456")
 {
    bal=bal+ann;
    alert("submit your amount"+ann);
    window.open("file:///C:/Users/Monika/Desktop/project%20bank/desu.html");
 }
else
 {
    alert("details not found");
 }
}

function checkbalanceform()
{
    window.location="checkbalance.html"
}
var bal=500;
function checkbalance()
{
    var hn=document.getElementById("hh").value;   
    var an=document.getElementById("aa").value;
    if(hn=="monika" && an=="123456")
    {
      alert("total balance"+bal);
       window.open("file:///C:/Users/Monika/Desktop/project%20bank/all%20options.html")
    }
    else
    {
        alert("account not found")
    }
}

function exist()
{
    alert("are you sure you wan't logout")
    window.location="signup.html"
}