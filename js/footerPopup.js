let f_flag=0;
function showPopup(){
  fcontainer = document.getElementById('fcontainer');
  if(f_flag===0){
    fcontainer.classList.add('popup');
    f_flag=1;
  }else{
    fcontainer.classList.remove('popup');
    f_flag=0;
  }
}