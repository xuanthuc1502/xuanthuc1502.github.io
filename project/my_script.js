function get_img() {
    var num = Math.floor(Math.random() * 15) + 1;
    console.log("picture/"+num+".jpg");
    return "picture/"+num+".jpg";
}

for (i = 0;i < document.getElementsByClassName("img-product").length;i++){
    console.log(document.getElementsByClassName("img-product")[i].src=get_img());
}

var plus = document.getElementsByClassName('quantity-plus')
for (let a = 0; a < plus.length; a++) {
    plus[a].onclick = function(){
        console.log(this.parentElement.children[1]);
        quanlity_n = this.parentElement.children[1].getAttribute('value');
        quanlity_n = Number(quanlity_n)+1;
        this.parentElement.children[1].value = quanlity_n.toString();
        console.log(this.parentElement.children[1].getAttribute('value'));
    };
}

var minus = document.getElementsByClassName('quantity-minus')
for (let a = 0; a < minus.length; a++) {
    minus[a].onclick = function(){
        console.log(this.parentElement.children[1]);
        quanlity_n = this.parentElement.children[1].getAttribute('value');
        quanlity_n = Number(quanlity_n)-1;
        this.parentElement.children[1].value = quanlity_n.toString();
        console.log(this.parentElement.children[1].getAttribute('value'));
    };
}

price = document.getElementsByClassName('card-text');
for (let i = 0; i < price.length; i++) {
    price[i].innerHTML= (Math.floor(Math.random() * 10)+1)+'.000.000d';
}
