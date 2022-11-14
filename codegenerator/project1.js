let  btn=document.querySelector('#get-quote');
let  quote=document.querySelector('.quote');
let  person=document.querySelector('.person');


const list=[{
    quote:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam excepturi consequatur molestias quos perspiciatis molestiae beatae reprehenderit maiores voluptatibus sunt necessitatibus officiis, nobis eum porro aperiam velit. Incidunt, amet!"`,
    person:`HI`

},
{
    quote:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam excepturi consequatur molestias quos perspiciatis molestiae beatae reprehenderit maiores voluptatibus sunt necessitatibus officiis, nobis eum porro aperiam velit. Incidunt, amet!"`,
    person:`Hello`

},
{
    quote:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam excepturi consequatur molestias quos perspiciatis molestiae beatae reprehenderit maiores voluptatibus sunt necessitatibus officiis, nobis eum porro aperiam velit. Incidunt, amet!"`,
    person:`Good`

},
{
    quote:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magnam excepturi consequatur molestias quos perspiciatis molestiae beatae reprehenderit maiores voluptatibus sunt necessitatibus officiis, nobis eum porro aperiam velit. Incidunt, amet!"`,
    person:`Learning`

},
{
    quote:`"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure distinctio, aliquid magni sed laborum nam quisquam. Asperiores perferendis ex vitae nostrum tempore sit cupiditate at iure! Aut minima placeat mollitia."`,
    person:`well`

}
];

btn.addEventListener('click',function(){

    let random = Math.floor(Math.random()* list.length);

    quote.innerText=list[random].quote;
    person.innerText=list[random].person;



})









