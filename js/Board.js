function addRow(num, title,dsBranchName,userName,writeDate,Progress) {
  let table=document.getElementById('boardTable');
  // 새 행(row) 생성
  let newRow = table.insertRow();
  // td 생성
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  let cell6 = newRow.insertCell(5);

  cell1.innerHTML = num;
  cell2.innerHTML = '<a href="none.html" style="text-decoration: none; font-weight=bolder; color:#000000;">' +title + '</a>';
  cell3.innerHTML = dsBranchName;
  cell4.innerHTML =userName;
  cell5.innerHTML = writeDate;
  cell6.innerHTML=Progress;
  }
  let endNum = 5; //TODO: DB에서 받아오기

  for(let i = 0; i < endNum; i++){
    num = 1000;
    title = '현대백화점 판교점에 가려는데..';
    dsBranchName='판교점';
    userName='김승호';
    writeDate='2024-07-16';
    Progress='준비중'; // TODO DB에서 받아와서 값 저장
    addRow(num, title,dsBranchName,userName,writeDate,Progress);
  }

  let prevCal = document.getElementById('prevCal');
  let curCal = document.getElementById('curCal');
  let today = new Date();
  if (today.getMonth() + 1 === 1) {
    prevCal.value = (today.getFullYear() - 1) + " - " + 12 + " - " + today.getDate();
    curCal.value = today.getFullYear() + " - " + (today.getMonth() + 1) + " - " + today.getDate();
  } else {
    prevCal.value = today.getFullYear() + " - " + today.getMonth() + " - " + today.getDate();
    curCal.value = today.getFullYear() + " - " + (today.getMonth() + 1) + " - " + today.getDate();
  }