//alert("hii");

/*
element=document.getElementsByClassName("counter rot-c");
element.click();
*/


var event = new KeyboardEvent('keydown',{
    key: 'g',
    ctrlKey: true
    });
    setInterval(function(){
        for (i = 0; i < 1000; i++) {
            document.dispatchEvent(event);
        }
    }, 1)