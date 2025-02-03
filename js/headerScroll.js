// 스크롤 이벤트 리스너
var lastScrollTop = 0;
window.addEventListener('scroll', function() {
var header = document.getElementById('header');
var mainImg= document.getElementById('mainImg');
var footerContainer = document.getElementById('footer_Container');
var holdingMenuArea=document.getElementById('holding_MenuArea');
var contents_imgHeader=document.getElementById('contents_imgHeader');
var fixRoundTopbutton=document.getElementById('fixRoundTopbutton');
var scrollPosition = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

if(scrollPosition>0){
  contents_imgHeader.classList.add('up');
  fixRoundTopbutton.classList.add('appear');
}else{
  contents_imgHeader.classList.remove('up');
  fixRoundTopbutton.classList.remove('appear');
}
// 스크롤을 내리면 헤더를 숨김
if (scrollPosition > lastScrollTop) {
  header.classList.add('hidden');
  mainImg.classList.add('blur');
} else {
  header.classList.remove('hidden');
  mainImg.classList.remove('blur');
}
lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;

const observer = new IntersectionObserver(
  (entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              // viewport에 보이는 footer 영역의 높이만큼 밀기
              holdingMenuArea.style.top = `-${entry.intersectionRect.height}px`;
              fixRoundTopbutton.style.bottom=`${entry.intersectionRect.height}px`; 
            } else {
              // footer 영역이 보이지 않으면 원래 위치로
              holdingMenuArea.style.top = '0';
              fixRoundTopbutton.style.bottom ='10px';
          }
      });
  },
  // 화면에서 해당 요소가 0% 이상 보일 경우 화면에 들어온 것으로 판단함
  { threshold: [0, 1] }
);

   // 관찰 대상 설정
  const targetElements = document.querySelectorAll("#footer_Container");
  targetElements.forEach((element) => {
    observer.observe(element);
  });
});