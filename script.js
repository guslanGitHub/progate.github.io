const bars = document.querySelector('.menu-icon');
const menuBars = document.querySelector('.header-list');
bars.addEventListener('click', function(){
    menuBars.classList.toggle('menu-list');
});

const item = document.querySelectorAll('.foto');
const nama = document.querySelector('.nama');
const asal = document.querySelector('.asal');
const data = [
    {
        nama: "Erwin Sudrajat R",
        asal: "Cirebon",
        gambar: "gambar1.jpg"
    },
    {
        nama: "Edo",
        asal: "Jawa",
        gambar: "foto1.png"
    },
    {
        nama: "Etvin",
        asal: "Jawa",
        gambar: "foto2.jpeg"
    },
    {
        nama: "Ghiffari Agsarya Arlin",
        asal: "Kendari",
        gambar: "foto3.jpg"
    },
    {
        nama: "Guslan",
        asal: "Papua Barat",
        gambar: "foto4.jpg"
    }
];
let i = -1;
let j = 0;
let k = 1;
let l = 2;
let m = 3;
function show(){
    if(item[2].getAttribute('class') === 'geser'){
        item[0].classList.remove('geser');
        item[1].classList.remove('geser');
        item[2].classList.remove('geser');
        item[3].classList.remove('geser1');
        item[4].classList.remove('geser1');
        nama.classList.remove('geser');
        asal.classList.remove('geser');
        if(m < data.length){
            m++;
            if(m === 5){
                m = 0;
                item[4].setAttribute('src',`gambar/${data[m].gambar}`);
            }else{
                item[4].setAttribute('src',`gambar/${data[m].gambar}`);
            }
        }
        if(l < data.length){
            l++;
            if(l === 5){
                l = 0;
                item[3].setAttribute('src',`gambar/${data[l].gambar}`);
            }else{
                item[3].setAttribute('src',`gambar/${data[l].gambar}`);
            }
        }
        if(k < data.length){
            k++;
            if(k === 5){
                k = 0;
                item[2].setAttribute('src',`gambar/${data[k].gambar}`);
                nama.innerHTML = data[k].nama;
                asal.innerHTML = data[k].asal;
            }else{
                item[2].setAttribute('src',`gambar/${data[k].gambar}`);
                nama.innerHTML = data[k].nama;
                asal.innerHTML = data[k].asal;
            }
        }
        if(j < data.length){
            j++;
            if(j === 5){
                j = 0;
                item[1].setAttribute('src',`gambar/${data[j].gambar}`);
            }else{
                item[1].setAttribute('src',`gambar/${data[j].gambar}`);
            }
        }
        if(i < data.length){
            i++;
            if(i === 5){
                i = 0;
                item[0].setAttribute('src',`gambar/${data[i].gambar}`);
            }else{
                item[0].setAttribute('src',`gambar/${data[i].gambar}`);
            }
        }
        setTimeout(() => {
            show();
        }, 5000);
    }else{
        item[0].setAttribute('class','geser');
        item[1].setAttribute('class','geser');
        item[2].setAttribute('class','geser');
        item[3].setAttribute('class','geser1');
        item[4].setAttribute('class','geser1');
        nama.setAttribute('class','geser');
        asal.setAttribute('class','geser');
        setTimeout(() => {
            show();
        }, 500);
    }
}
show();
