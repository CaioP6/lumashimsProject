
let cardCadastro = document.querySelector('.cardCadastro'); //chama o card cadastro pro js 
let cardLogin = document.querySelector('.cardLogin'); //chama o card login
let leftImage = document.querySelector('.leftLoginImage'); // chama a imagem de login
let leftImage2 = document.querySelector('.leftCadastroImage'); // chama a imagem de cadastro
let leftTitleLogin = document.querySelector('.loginTitle'); //chama o h1 do login
let leftTitleCadastro = document.querySelector('.cadastroTitle'); // chama o h1 do cadastro

function cadastro(){ //função para abrir a div de cadastro
    
    if(cardCadastro.classList.contains('transitionOpen')){
        cardLogin.classList.remove('transitionOpen');
        cardLogin.classList.add('transitionClose'); 

        leftImage.classList.remove('transitionOpen');
        leftImage.classList.add('transitionClose');

        leftTitleLogin.classList.remove('transitionOpen');
        leftTitleLogin.classList.add('transitionClose');

        leftTitleCadastro.classList.add('transitionOpen');

        leftImage2.classList.add('transitionOpen');

        cardCadastro.classList.add('transitionOpen');
        
        
    }else{
        cardCadastro.classList.remove('transitionClose');
        cardCadastro.classList.add('transitionOpen');
        
        leftImage.classList.remove('transitionOpen');
        leftImage.classList.add('transitionClose');
        
        cardLogin.classList.remove('transitionOpen');
        cardLogin.classList.add('transitionClose');

        leftTitleLogin.classList.remove('transitionOpen');
        leftTitleLogin.classList.add('transitionClose');

        leftTitleCadastro.classList.remove('transitionClose');
        leftTitleCadastro.classList.add('transitionOpen');
        
        leftImage2.classList.remove('transitionClose');
        leftImage2.classList.add('transitionOpen');
    }
}

function login(){//função para abrir a div de login

    if(cardLogin.classList.contains('transitionOpen')){

        cardLogin.classList.add('transitionOpen');
        cardLogin.classList.remove('transitionClose');


        leftImage.classList.add('transitionOpen');
        leftImage.classList.remove('transitionClose');

        cardCadastro.classList.remove('transitionOpen');
        cardCadastro.classList.add('transitionClose');

        leftImage2.classList.remove('transitionOpen');
        leftImage2.classList.add('transitionClose');

        leftTitleCadastro.classList.remove('transitionOpen');
        leftTitleCadastro.classList.add('transitionClose');

        leftTitleLogin.classList.remove('transitionClose')
        leftTitleLogin.classList.add('transitionOpen');

        
        
    }else{
        cardLogin.classList.add('transitionOpen');
        cardLogin.classList.remove('transitionClose');

        cardCadastro.classList.remove('transitionOpen');
        cardCadastro.classList.add('transitionClose');

        leftImage.classList.add('transitionOpen');
        leftImage.classList.remove('transitionClose');

        leftTitleCadastro.classList.remove('transitionOpen');
        leftTitleCadastro.classList.add('transitionClose');

        leftImage2.classList.remove('transitionOpen');
        leftImage2.classList.add('transitionClose');

        leftTitleLogin.classList.remove('transitionClose')
        leftTitleLogin.classList.add('transitionOpen');
    }

}

