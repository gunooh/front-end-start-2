/* 1부터 100까지 출력하기 */
for(x=1; x<=100; x++){
  console.log(x);
}

/* 100까지의 짝수 출력 */
for(x=2; x<=100; x=x+2){
  console.log(x);
}

/* 100까지의 홀수 출력 */
for(x=1; x<=100; x=x+2){
  console.log(x);
}

/* 구구단 출력 */
for(a=1; a<=9; a++){
  for(b=1; b<=9; b++){
    console.log(a + "*" + b + "=" + (a*b));
  }
}

/* 숫자 입력받기 */
function addNum(){
  var sum = 0;

  while(true){
    var num = prompt();
    if(num == '')
      break;

    num = parseInt(num);
    sum += num;
  }

  console.log(sum);
}
addNum(); // 호출
