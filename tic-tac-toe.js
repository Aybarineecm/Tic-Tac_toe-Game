
window.onload= start
var PlayerO= true;
var arr= ["", "","","", "", "","","", ""]; 

function start ()
{
var statusbox;
var turn1;
let turn="X";
let squares= document.querySelectorAll("#board div");   //document.getelementbyid("board").children --> this is another way to do this by using the children
var statusbox= document.getElementById("status");


for (let i=0; i<squares.length;i++ )
{
    squares[i].classList.add("square"); 
    squares[i].addEventListener("click", function() 
                {
                    if (this.textContent=="")
                     {
                        this.textContent=turn;
                        if (turn== "X")
                        {
                            this.classList.add("X"); 
                            turn="O";

                        }
                        else 
                            {
                                this.classList.add("O"); 
                                turn="X";
                            }
                     }

                     






                        /*
                     } 


                    if (PlayerO==true)
                        {  
                            turn1=this.textContent="X";
                            this.classList.add("X");
                            arr[i]= turn1;
                            PlayerO= fasle;
                        }

                     else
                        { 
                            PlayerO= fasle;
                            turn1= this.textContent="O";
                            arr[i]= turn1;
                            this.classList.add("O");
                         }

                        //PlayerO=!PlayerO //changing player to true.. flipping between true or false.
                        console.log(PlayerO); */


                 });// function ends here
           

             
     squares[i].addEventListener("mouseover", function(){this.classList.add("hover");})
     squares[i].addEventListener("mouseleave", function (){this.classList.remove("hover");})


}
    /*if ((squares[0]== textContent("X") && squares[1]== textContent("X")) && (squares[2]== textContent("X")))

       {document.addtextContent("status", "Congratulations! X is the Winner!"); };
    if ((squares[3]== textContent("X") && squares[4]== textContent("X")) && (squares[5]== textContent("X")))

       {document.addtextContent("status", "Congratulations! X is the Winner!"); };
    if ((squares[6]== textContent("X") && squares[7]== textContent("X")) && (squares[8]== textContent("X")))

       {document.addtextContent("status", "Congratulations! X is the Winner!"); };

    if ((squares[0]== textContent("O") && squares[1]== textContent("O")) && (squares[2]== textContent("O")))

       {document.addtextContent("status", "Congratulations! O is the Winner!"); };
    if ((squares[3]== textContent("O") && squares[4]== textContent("O")) && (squares[5]== textContent("O")))

       {document.addtextContent("status", "Congratulations! O is the Winner!"); };
    if ((squares[6]== textContent("O") && squares[7]== textContent("O")) && (squares[8]== textContent("O")))

       {document.addtextContent("status", "Congratulations! O is the Winner!"); };
    
    if (squares[0].innerHTML=="X" && squares[1].innerHTML=="X" && squares[2].innerHTML=="X"){statusbox.classList.add("you-won"); statusbox.innerHTML= "Congratulations! X is the Winner!"; }
                            else if (squares[3].innerHTML=="X" && squares[4].innerHTML=="X" && squares[5].innerHTML=="X"){statusbox.classList.add("you-won"); statusbox.innerHTML= "Congratulations! X is the Winner!";}
                               else if (squares[6].innerHTML=="X" && squares[7].innerHTML=="X" && squares[8].innerHTML=="X")
                                    {
                                        statusbox.classList.add("you-won");
                                    statusbox.innerHTML= "Congratulations! X is the Winner!";
                                   }
                               
    
       */
    
}