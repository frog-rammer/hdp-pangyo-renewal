 /* 날씨~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
 var lat = "37.392525";
 var lon = "127.112193";
 var APIkey = "e645568cdd7cd9fbed6b344ddde8fc9c";

 const getWeather = async (lat, lon, APIkey) => {
   try {
     const response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
     );
     const data = await response.json();6
     console.log(data); // 배포시 빼기
     return data;
   } catch (error) {
     alert(error);
   }
 };
 (async () => {6
   let weatherData = await getWeather(lat, lon, APIkey);
   var MenuArea = document.getElementById('holding_MenuArea_weather'); 
   var MarketOpenInfo = "정상영업"; // TODO : 서버에서 받아와서 출력
   var MarketOpenTime = "10:30 ~ 20:00";
   var weahterIcon="";

   if (MenuArea !==null && weatherData !==null) {
     console.log(weatherData.weather[0].id);
     switch(Math.floor(weatherData.weather[0].id/100)){
       case 2: // 천둥 번개
         weahterIcon ="<img class='weatherImg' src='images/icon/thunder.png' alt='천둥 번개'>"
         break;
       case 3: // 이슬 비 -> 비내리는 아이콘으로
         weahterIcon="<img class='weatherImg' src='images/icon/rain.gif' alt='비내림'>"
         break;
       case 5: // 비
         weahterIcon="<img class='weatherImg' src='images/icon/rain.gif' alt='비내림'>"
         break;        
       case 6: // 눈
         weahterIcon="<img class='weatherImg' src='images/icon/Snowing.gif' alt='눈내림'>"
         break;
       case 7: // cloud 아이콘으로 처리 (mist , smoke etc..)
         weahterIcon="<img src='images/icon/partly-cloudy.gif' alt='구름'>"
         break;
       case 8: //801~804 cloud 800:clear
         if(weatherData.weather[0].id%100 === 0){
           weahterIcon="<img class='weatherImg' src='images/icon/sunny.gif' alt='맑음'>"
         }else{
           if(weatherData.weather[0].id%100 >= 3){
             weahterIcon="<img class='weatherImg' src='images/icon/smoke.gif' alt='구름 뒤덮임'>"
           }else{
              weahterIcon="<img class='weatherImg' src='images/icon/partly-cloudy.gif' alt='구름 조금'>"
           }  
         }
         break;    
     }
     MenuArea.innerHTML = `
       <div style='color:white; line-height:200%'> 
         <p>현대백화점 판교점</p>
         <p>오늘은 <b>${MarketOpenInfo}</b>중</p>
         <p>영업시간은 <b>${MarketOpenTime}</b>입니다.</p>
         <div style='display:flex;'>
           ${weahterIcon}
           <span class='titlefont' style='margin:0'>${Math.floor(weatherData.main.temp)}°</span>
         </div>
       </div>`;
   }
 })();