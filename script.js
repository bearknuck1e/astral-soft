const td0=document.getElementById("td-0");
const td1=document.getElementById("td-1");
const td2=document.getElementById("td-2");
const td3=document.getElementById("td-3");
let rect_td0=td0.getBoundingClientRect();
let rect_td1=td1.getBoundingClientRect();
let rect_td2=td2.getBoundingClientRect();
let rect_td3=td3.getBoundingClientRect();
const union1=document.getElementById("union1");
const union2=document.getElementById("union2");
const union3=document.getElementById("union3");
union1.style.top=(rect_td1.bottom-rect_td0.top+68)+"px";
union1.style.left=(rect_td1.left-rect_td0.left+Math.round(rect_td1.width/2)-10)+"px";
union2.style.top=(rect_td2.bottom-rect_td0.top+68)+"px";
union2.style.left=(rect_td2.left-rect_td0.left+Math.round(rect_td2.width/2)-77)+"px";
union3.style.top=(rect_td3.bottom-rect_td0.top+56)+"px";
union3.style.left=(rect_td3.right-rect_td0.left-124)+"px";

const formClient=document.getElementById("form-client");
let rect_formClient=formClient.getBoundingClientRect();
const imgGirl=document.getElementById("img-girl");
imgGirl.style.top=(rect_formClient.bottom-rect_formClient.top-390)+"px";
imgGirl.style.left=(rect_formClient.right-rect_formClient.left-215)+"px";

const contTable=document.getElementById("cont-table");
let rect_contTable=contTable.getBoundingClientRect();
const imgGirl5=document.getElementById("img-girl-5");
imgGirl5.style.top=(rect_contTable.bottom-rect_contTable.top-306)+"px";
imgGirl5.style.left=(rect_contTable.right-rect_contTable.left-220)+"px";
let pageWidth = document.documentElement.scrollWidth;
if (pageWidth>1210){
  imgGirl5.style.top=(rect_contTable.bottom-rect_contTable.top-306)+"px";
  imgGirl5.style.left=(rect_contTable.right-rect_contTable.left-220)+"px";
}else{
  imgGirl5.style.top=(rect_contTable.bottom-rect_contTable.top-306)+"px";
  imgGirl5.style.left=(rect_contTable.right-rect_contTable.left-140)+"px";
}

window.addEventListener("resize", ()=> {
  rect_td0 = td0.getBoundingClientRect();
  rect_td1 = td1.getBoundingClientRect();
  rect_td2 = td2.getBoundingClientRect();
  rect_td3 = td3.getBoundingClientRect();
  union1.style.top=(rect_td1.bottom-rect_td0.top+68)+"px";
  union1.style.left=(rect_td1.left-rect_td0.left+Math.round(rect_td1.width/2)-10)+"px";
  union2.style.top=(rect_td2.bottom-rect_td0.top+68)+"px";
  union2.style.left=(rect_td2.left-rect_td0.left+Math.round(rect_td2.width/2)-77)+"px";
  union3.style.top=(rect_td3.bottom-rect_td0.top+56)+"px";
  union3.style.left=(rect_td3.right-rect_td0.left-124)+"px";  

  rect_formClient=formClient.getBoundingClientRect();
  imgGirl.style.top=(rect_formClient.bottom-rect_formClient.top-390)+"px";
  imgGirl.style.left=(rect_formClient.right-rect_formClient.left-215)+"px";

  rect_contTable=contTable.getBoundingClientRect();  
  pageWidth=document.documentElement.scrollWidth;
  if (pageWidth>1210){
    imgGirl5.style.top=(rect_contTable.bottom-rect_contTable.top-306)+"px";
    imgGirl5.style.left=(rect_contTable.right-rect_contTable.left-220)+"px";
  }else{
    imgGirl5.style.top=(rect_contTable.bottom-rect_contTable.top-306)+"px";
    imgGirl5.style.left=(rect_contTable.right-rect_contTable.left-140)+"px";
  }
});


const form=document.getElementById('send');
form.onclick=function(event){
  event.preventDefault();
  
  const inn_org=document.getElementById('inn-org');
  const name=document.getElementById('name');
  const inn_client=document.getElementById('inn-client');
  const kpp_client=document.getElementById('kpp-client');
  errors=false;

  if(inn_org.value.trim()==''){
    inn_org.className='is-invalid';
    errors=true;
  }else{
    inn_org.className='';
  }
  if(name.value.trim()==''){
    name.className='is-invalid';
    errors=true;
  }else{
    name.className='';
  }
  if(inn_client.value.trim()==''){
    inn_client.className='is-invalid';
    errors=true;
  }else{
    inn_client.className='';
  }
  if(kpp_client.value.trim()==''){
    kpp_client.className='is-invalid';
    errors=true;
  }else{
    kpp_client.className='';
  }

  if(errors){
    alert('Заполните все поля!');
  }else{
    alert('Ваша заявка успешно отправлена!');
    inn_org.value='';
    name.value='';
    inn_client.value='';
    kpp_client.value='';
  }
}


const form_1=document.getElementById('send-1');
form_1.onclick=function(event){
  event.preventDefault();
  
  const inn_org_1=document.getElementById('inn-org-1');
  const name_1=document.getElementById('name-1');
  const mail_1=document.getElementById('mail-1');
  const phone_1=document.getElementById('phone-1');
  errors=false;

  if(inn_org_1.value.trim()==''){
    inn_org_1.className='is-invalid';
    errors=true;
  }else{
    inn_org_1.className='';
  }
  if(name_1.value.trim()==''){
    name_1.className='is-invalid';
    errors=true;
  }else{
    name_1.className='';
  }
  if(mail_1.value.trim()==''){
    mail_1.className='is-invalid';
    errors=true;
  }else{
    mail_1.className='';
  }
  if(phone_1.value.trim()==''){
    phone_1.className='is-invalid';
    errors=true;
  }else{
    phone_1.className='';
  }

  if(errors){
    alert('Заполните все поля!');
  }else{
    alert('Ваша заявка успешно отправлена!');
    inn_org_1.value='';
    name_1.value='';
    mail_1.value='';
    phone_1.value='';
  }
}