let title = document.querySelector('.title');
let turn = 'x';
let shapes = [];
function end(num1,num2,num3){
    title.innerHTML = `${shapes[num1]} Winner `;
    document.getElementById('item'+num1).style.background= '#000';
    document.getElementById('item'+num2).style.background= '#000';
    document.getElementById('item'+num3).style.background= '#000';
setInterval(function() { title.innerHTML += '.'},1000);
setTimeout(function(){location.reload(),4000})
     }

function Winner()

{

for(let i = 1; i<10; i++)
    {
  shapes[i]=  document.getElementById('item'+ i).innerHTML;
} 
if (shapes [1] == shapes [2] &&  shapes [2] == shapes [3] && shapes[2] !='')
{
    end(1,2,3)
}
  else  if(shapes [4] == shapes [5] && shapes [5] == shapes [6] && shapes[4] !='')
  {
    end(4,5,6)
  }
    
        else if(shapes [7] == shapes [8] && shapes [8] == shapes [9] && shapes[9] !='')
    {
        end(7,8,9)
    }
    
        else if(shapes [1] == shapes [4] && shapes [4] == shapes [7] && shapes[4] !='')
    
{
    end(1,4,7)
}
    else  if(shapes [2] == shapes [5] && shapes [5] == shapes [8] && shapes[8] !='')
{
    end(2,5,8)
}
    else  if(shapes [3] == shapes [6] && shapes [6] == shapes [9] && shapes[9] !='')

{
    end(3,6,9)
}
    else  if (shapes [1] == shapes [5] && shapes [5] == shapes [9] && shapes[1] !='')
{
    end(1,5,9)
}

    else  if (shapes [3] == shapes [5] && shapes [5] == shapes [7] && shapes[7] !='')
{
    end(3,5,7)
}
function game(id)
{
let element = document.getElementById(id);
if(turn === 'x' && element.innerHTML == '' )
{

    element.innerHTML ='x';
    turn='o';
    title.innerHTML = 'o';
} 

else if (turn === 'o' && element,innerHTML ==''){}
    element.innerHTML = 'o';
turn = 'x';
title.innerHTML = 'x'; 
}
}