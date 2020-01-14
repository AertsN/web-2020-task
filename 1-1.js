function ThreeSecChange() { 
//関数imgchange1()を3000ミリ秒間隔で呼び出す 
  setInterval("imgchange()",3000); } 
  

function imgchange() {
  document.getElementById('logo').src = './image/soccer_futsal_man.png';
}