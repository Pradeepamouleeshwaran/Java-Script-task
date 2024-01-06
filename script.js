// document.head.innerHTML='<title>DOM</title>';
// // document.body.innerHTML='<p>Hello World</p>';
// // document.body.innerHTML+="Hello World 1";
// let z=document.createElement('p');
// document.body.append(z);
// z.textContent='Hi...Good Morning';

// // create parent
// let div=document.createElement('div');
// div.style.width='200px';
// div.style.height='200px';
// div.style.background='grey';
// document.body.append(div);

// // create child and append child into parent
// let para=document.createElement('p');
// para.textContent='DIV PARA';
// para.style.color='white';
// para.style.fontSize='25px';
// div.appendChild(para);

//set attribute and get attribute
// let link=document.createElement('a');
// document.body.append(link);
// link.textContent='Home';
// link.setAttribute('href','#');
// console.log(link.getAttribute('href'));
// link.removeAttribute('href');

// //shortcut
// link.href='+';
// link.remove();

// let img=document.createElement('img');
// img.src='https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg';
// img.style.width='300px';
// img.style.height='300px';
// img.style.borderRadius='100px';
// document.body.append(img);

// let a=prompt('Enter first value');
// let b=prompt('Enter second value');
// // document.write(a+b);
// document.write(parseInt(a)+parseInt(b));

//Accessing Element
// let input = document.createElement('p');
// input.id='username';
// document.body.append(input);
// let c = document.getElementById('username');

// c.textContent='This is a Paragraph..!';
// document.body.append(c);
// c.style.color='red';
// c.style.fontsize='45px';


// class
let elements = document.getElementsByClassName('highlight');
console.log(elements);

for(let i=0;i<elements.length;i++){
    elements[i].style.background='grey';
}


let query = document.querySelector('h1');
query.style.color='blue';

let all = document.querySelectorAll('p');
console.log(all);


for(let i=0;i<all.length;i++){
    all[i].style.color='red'
}

// let paranew = document.createElement('p');
// paranew.className='highlight';
// document.body.append(paranew);
// para.textContent='This is an JS class';


let tag=document.getElementsByClassName('ol');

console.log(tag[0].textContent);
console.log(tag[0].innerText);
