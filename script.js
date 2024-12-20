function diceRoll(){
    const numdice=document.getElementById('numdice').value;
    const diceResult=document.getElementById("diceResult");
    const diceImage=document.getElementById('diceImage');
    const values=[];
    const images=[];

    for (let i=0;i<numdice;i++)
    {
        let value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(` <img src="images/dice${value}.png">`);
    }
    diceResult.textContent=`Dice:${values.join(",")}`;
    diceImage.innerHTML=images.join("");

}