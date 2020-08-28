document.addEventListener("DOMContentLoaded",function(){
    var add = function add(a, b) {
        return a+b;
    }

    var minus = function minus(a, b) {
        return a-b;
    }

    var mul = function multiply(a, b) {
        return a*b;
    }

    var divide = function divide(a, b) {
        return a/b;
    }

    var modulus = function modulus(a, b) {
        return a%b;
    }
//function

    var kq = document.getElementById('result');
    var ct = document.getElementById('formula');
    var nut = document.getElementsByClassName('btn');
    var bang = document.getElementById('equal');

    var nut_func = document.getElementsByClassName('btn-func');

    var chuoi_hienthi = [];
    var real_number =[];
    var a=0,b=0;
    var type_func = "";
    var end_kq = 0;
    for (let i = 0; i < nut.length; i++) {
        nut[i].onclick = function(){
            chuoi_hienthi.push(nut[i].innerHTML);
            real_number.push(nut[i].innerHTML);
            kq.innerHTML = chuoi_hienthi.join('');
        }
    }

    for (let i = 0; i < nut_func.length; i++) {
        nut_func[i].onclick = function(){
            a = Number(real_number.join(''));
            chuoi_hienthi.push(this.innerHTML);
            kq.innerHTML = chuoi_hienthi.join('');
            console.log(a);
            type_func = this.innerHTML;
            real_number = [];
            if (type_func == 'AC') {
                chuoi_hienthi =[];
                kq.innerHTML = 0;
                ct.innerHTML = " ";
            }
        }
    }

    bang.onclick = function (){
        chuoi_hienthi.push(this.innerHTML);
        ct.innerHTML = chuoi_hienthi.join('');
        b = Number(real_number.join(''));
        if (type_func == ' + ') {kq.innerHTML = add(a,b);}
        if (type_func == ' / ') {kq.innerHTML = divide(a,b);}
        if (type_func == ' x ') {kq.innerHTML = mul(a,b);}
        if (type_func == ' - ') {kq.innerHTML = minus(a,b);}
        if (type_func == ' % ') {kq.innerHTML = modulus(a,b);}
        type_func = "";
        chuoi_hienthi = [];
        real_number = [];
        // chuoi_hienthi.push(kq.innerHTML);
        // real_number.push(kq.innerHTML);
    }
})