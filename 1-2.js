 function hyoji(){
  //表示する文字
  var str = "ツムツム";
  //テキストボックスの文字数
  var cnt = document.timer.moji.value.length;
  //文字が全部表示されているか確認 
  if(cnt < 11){
    //現在より1文字多く切り出して表示
    document.timer.moji.value=str.substr(0,cnt+1);}
     
　else{
     //すべて表示されたら空文字に戻す
  document.timer.moji.value="";}
     //setTimeout()を含む関数を呼び出す
　setTimeout("hyoji()",1000);}