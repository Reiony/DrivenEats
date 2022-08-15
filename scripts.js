let dishprice;
let drinkprice;
let dessertprice;
let dishname;
let drinkname;
let dessertname;


function chooseDish(value){
    const selecionadx = document.querySelector(".selectedish");
    const recebeclasse= document.querySelector(value);
    const achabotao=document.querySelector(".littlebutton" + value);
    const botaoligado= document.querySelector(".showingdish");

    if (selecionadx !== null){
        selecionadx.classList.remove("selectedish");
    }
    if (botaoligado!==null){
        botaoligado.classList.remove("showingdish");
    } 
    recebeclasse.classList.toggle("selectedish");
    achabotao.classList.toggle("showingdish");

    dishprice=recebeclasse.getElementsByTagName("h5")[0].innerHTML.replace(",", ".");
    dishprice= dishprice.replace("R$ ","");
    dishname=recebeclasse.getElementsByTagName("h3")[0].innerHTML;
    enableButton();
}


function chooseDrink(value){
    const recebeclasse= document.querySelector(value);
    const selecionado = document.querySelector(".selectedrink");
    const achabotao= document.querySelector(".littlebutton"+value);
    const botaoligado= document.querySelector(".showingdrink");

    if (selecionado !== null){
        selecionado.classList.remove("selectedrink");
    }
    if (botaoligado!==null){
        botaoligado.classList.remove("showingdrink");
    }
    recebeclasse.classList.add("selectedrink");
    achabotao.classList.toggle("showingdrink");

    drinkprice= recebeclasse.getElementsByTagName("h5")[0].innerHTML.replace(",", ".");
    drinkprice= drinkprice.replace("R$ ","");
    drinkname=recebeclasse.getElementsByTagName("h3")[0].innerHTML;
    enableButton();
}


function chooseDessert(value){
    const recebeclasse= document.querySelector(value);
    const selected = document.querySelector(".selectedessert");
    const achabotao= document.querySelector(".littlebutton" + value);
    const botaoligado= document.querySelector(".showingdessert");

    if (selected !== null){
        selected.classList.remove("selectedessert");
    }
    if (botaoligado!==null){
        botaoligado.classList.remove("showingdessert");
    }
    recebeclasse.classList.add("selectedessert");
    achabotao.classList.toggle("showingdessert");

    dessertprice= recebeclasse.getElementsByTagName("h5")[0].innerHTML;
    dessertprice= dessertprice.replace(",", ".");
    dessertprice= dessertprice.replace ("R$ ","");
    dessertname=recebeclasse.getElementsByTagName("h3")[0].innerHTML;
    enableButton();

}


function enableButton(){
    const botaozin=document.querySelector("footer button p");
    const botaozinho=document.querySelector("footer button");
    if (dishprice !==undefined && drinkprice!==undefined && dessertprice!==undefined){
        botaozin.innerHTML= "Fechar Pedido";
        botaozin.classList.add("showing");
        botaozinho.classList.add("yesyoucan");
    }
}
let totalfinal;

function sumtotal(){
    if (dishprice !==undefined && drinkprice!==undefined && dessertprice!==undefined){
        valor1=dishprice;
        valor2=drinkprice;
        valor3=dessertprice;
        soma= Number(valor1) + Number(valor2) + Number(valor3);
        totalfinal=`R$:${soma.toFixed(2)}`
        totalfinal=totalfinal.replace(".", ",");
        console.log(totalfinal);
    }
    
}
let confereverde;
let name;
let endereço;

function finishorder() {
    const botaozinho=document.querySelector("footer button");
    const confereverde= botaozinho.querySelector("yesyoucan");
    const name = prompt('Qual é o seu nome?');
    const endereço = prompt('Qual é o seu endereço?');
    sumtotal();

    if (confereverde!==undefined){
        window.open("https://wa.me/5521997704352?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${dishname}
        - Bebida: ${drinkname}
        - Sobremesa: ${dessertname}
        Total:${totalfinal}
        Nome:${name}
        Endereço:${endereço}`), '_blank');
    }
    
}
