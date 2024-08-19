function menuShow(){ //função para abrir o menu, se a tela for menor que 700px
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open'); 
        document.querySelector('.icon').src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGZpbGw9IiM0MjQyN2MiIGQ9Ik0yMjQgMTI4YTggOCAwIDAgMS04IDhINDBhOCA4IDAgMCAxIDAtMTZoMTc2YTggOCAwIDAgMSA4IDhNNDAgNzJoMTc2YTggOCAwIDAgMCAwLTE2SDQwYTggOCAwIDAgMCAwIDE2bTE3NiAxMTJINDBhOCA4IDAgMCAwIDAgMTZoMTc2YTggOCAwIDAgMCAwLTE2Ii8+PC9zdmc+"
    } else {
        menuMobile.classList.add('open'); 
        document.querySelector('.icon').src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjN2UyNjI2IiBkPSJtNi40IDE4LjMwOGwtLjcwOC0uNzA4bDUuNi01LjZsLTUuNi01LjZsLjcwOC0uNzA4bDUuNiA1LjZsNS42LTUuNmwuNzA4LjcwOGwtNS42IDUuNmw1LjYgNS42bC0uNzA4LjcwOGwtNS42LTUuNnoiLz48L3N2Zz4="
    }
}
