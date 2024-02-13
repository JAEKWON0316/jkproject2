/*
1. 정수로 된 배열 두 개가 있다. 이 두 배열중 같은 수가 하나라도 있다면 true를 없으면 false를 출력하라.

2. 임의의 문자열이 소문자 사이에 대문자가 있거나 대문자 사이에 소문자가 있는지 확인하는 스크립트를 작성하라.

예) xYz ==> true  XyZ==> true


3. 양의정수를 받아 한자리를 삭제했을때 최대 숫자가 남도록 스크립트를 작성하라.

예) 100 ==> 10    576==> 76

 
4. 임의의 숫자를 한 자리 수로 변환될때 까지 계속 더하는 스크립트를 작성하라.

예 1234 ==> 1+2+3+4 +5 = 15 ==> 1 + 5 = 최종 6
*/

//1.
const array1 = [];
const array2 = [];
function check1(array1, array2){
for(let i = 0; i < array1.length; i++){
    const array3 = array1[i]
    for(let j = 0; j < array2.length; j++){
        if(array3 == array2[j]){
            return true;
        }
    }
}
return false;
}
console.log(check1([1,2,3,4] , [4,6,7,8]));

//2.

//3.

function check3(num){
    let str = String(num); //정수로 받은 x를 문자열로 변환
    let array = str.split(''); //문자열로 된 x를 배열로 변환
    let min = Math.min.apply(null, array);
    
    for(let i = 0; i < array.length; i++){
        if(array[i] == min){
            //let array2 = array.splice(array[i].length, 1);
            console.log(array[i]);
        }
        
    }
    
 
}
console.log(check3(1503));

