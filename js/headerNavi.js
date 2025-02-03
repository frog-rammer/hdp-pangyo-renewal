function showDetail(id){
    let detail= document.querySelector(id);
    detail.classList.toggle('activate');
  }
  function hideDetail(id){
    let detail = document.querySelector(id);
    detail.classList.remove('activate');
  }

  var flag = 0;
  function showBranchDetail(id){
    let detail= document.querySelector(id);
    if(flag ===0){
      detail.classList.add('brOpen');
      flag=1;
    }else{
      detail.classList.remove('brOpen');
      flag=0;
    }
  }
  function showPopupList(id,thisId) {
    const theHdItems = document.getElementById('Popuplist_theHdItems');
    const hddsItems = document.getElementById('Popuplist_hddsItems');
    const hdolItems = document.getElementById('Popuplist_hdolItems');

    if (theHdItems) theHdItems.style.display = 'none';
    if (hddsItems) hddsItems.style.display = 'none';
    if (hdolItems) hdolItems.style.display = 'none';

    const theHd = document.getElementById('Popuplist_theHd');
    const hdds = document.getElementById('Popuplist_hdds');
    const hdol = document.getElementById('Popuplist_hdol');
    
    if (theHd) {
      theHd.style.border='none';
      theHd.style.color="#ccc";
    }
    if (hdds){
      hdds.style.border = 'none';
      hdds.style.color="#ccc";
    } 
    if (hdol) {
      hdol.style.border = 'none';
      hdol.style.color="#ccc";
    } 

    const selectedItems = document.getElementById(id);
    const selectedThisItems =document.getElementById(thisId);
    if (selectedItems) {
    selectedItems.style.display = 'block';
    selectedThisItems.style.color='#333';
    selectedThisItems.style.borderBottom="1px solid #000";
    if (id === 'Popuplist_theHdItems') {
      const theHdUl = document.getElementById('theHdUl');
      if (theHdUl) theHdUl.style.display = 'flex';
    } else if (id === 'Popuplist_hdolItems') {
      const hdolUl = document.getElementById('hdolUl');
      if (hdolUl) hdolUl.style.display = 'flex';
    }
  }
}
  function showListDetail(id) {
      let list_theHdItems = document.getElementById('list_theHdItems');
      let list_hddsItems = document.getElementById('list_hddsItems');
      let list_hdolItems = document.getElementById('list_hdolItems');

      let selectedItems = document.getElementById(id);
      if(selectedItems){
        if (list_theHdItems) list_theHdItems.querySelector('.listItems').classList.remove('active');
        if (list_hddsItems) list_hddsItems.querySelector('.listItems').classList.remove('active');
        if (list_hdolItems) list_hdolItems.querySelector('.listItems').classList.remove('active');
        selectedItems.querySelector('.listItems').classList.add('active');
      }
  }
