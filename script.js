/*
The compute() function below has many local variables, with referenced id's from the HTML document. We also use
an if-else statement to ensure that the user has entered a positive principal amount into the first box.
*/
function compute()
{
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;

   /* "interest" variable assigned to the logic used to calculate overall interest earned based on user input */
   var interest = principal * years * rate /100;

   /* We use the below logic to determine actual year in the future from current year */
   var future_year = new Date().getFullYear()+parseInt(years);
   
   /* Using if-else statement to ensure user has entered a principal amount above zero. If so, the "result" HTML id is 
   updated to display a properly formatted, <mark>'ed (highlighted) statement with necessary information regarding what their
   interest will be depending on their choices. <br/> is used to display the following text on a new line.
   */
   if (principal > 0)
   {
        document.getElementById("result").innerHTML= "<br/>If you deposit <mark>"
        + principal + "</mark>, <br/> at an interest rate of <mark>"
        + rate +"%.</mark><br/> You will receive an amount of <mark>" + interest +
        "</mark>,<br/>in the year <mark>" + future_year + ".</mark><br/>";
   }

   /* If user enters zero or below, an alert shows and then the principal input box is focused on for new value to be input.
   Also note that the principal input box is cleared at this time as well due to our onfocus logic in the index.html document
   */
   else
   {
        alert("Please enter a number above Zero!");
        document.getElementById("principal").focus()
   }

}
       
/* This function dynamically updates the rate slider as the user changes it */
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval
}

/* 
This function, while slightly redundant, will alert the user they need to enter a value above zero in the "Amount" field immediately after they
change the value and click onto another input field, or elsewhere in the program. Since the user can technically hit the "Compute Interest" button while
still being focused on this input box, it was necessary to add logic into the compute() function above to double check that the value that 
was input was above zero.
*/
function valueCheck()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("You must enter a value above Zero!");
        document.getElementById("principal").focus()
    }
}
