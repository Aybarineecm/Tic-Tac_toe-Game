
window.onload= start
var Player= true;
var arr= ["","","","","","","","",""]; 
var arraywin=[[0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7],[2,5,8], [0,4,8], [2,4,6]];

function start ()
{
var statusBox;
var turn1;
let turn="X";
let squares=document.querySelectorAll("#board div");   //document.getelementbyid("board").children --> this is another way to do this by using the children
var statusBox=document.getElementById("status");


for (let i=0; i<squares.length;i++ )
{
    squares[i].classList.add("square"); 
    squares[i].addEventListener("click", function() 
                { if (Player==true)
                  {
                    if (this.textContent=="")
                                {
                                    this.textContent=turn;
                                    arr.splice (i,1,turn);
                                    //console.log(arr);
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

                     for (let i in arraywin) 
                         {
                              let a=arraywin[i][0]; 
                              //console.log(a);
                              let b=arraywin[i][1];
                              let c=arraywin[i][2];
                               if (arr[a] && arr[a]== arr[b] && arr[a]==arr[c])
                                  {
                                      console.log(arr[a])
                                      statusBox.textContent= `Congratulations! ${ arr[a]} is the Winner!`
                                      Player=false;
                                  }
                         }
                   }
                
                });
                squares[i].addEventListener("mouseover", function(){this.classList.add("hover")})
                squares[i].addEventListener("mouseleave", function (){this.classList.remove("hover")})


    
}
var newGame= document.getElementById("game");
var btn= newGame.getElementsByClassName("btn");
btn[0].addEventListener("click", function()
{
  window.location.reload(true);
}

)

} //closes the entire function