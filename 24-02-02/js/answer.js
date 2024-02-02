//1. 임의의 양의 정수 세개가 마지막 숫자가 같은지 확인하시오.
function last_digit(x, y, z){
    if( x > 0 && y > 0 && z > 0 ){
       return x % 10 == y % 10 && y % 10 == z % 10 && z % 10 == x % 10; //세개의 양의 정수를 10으로 나눈 나머지를 비교한다.
    }
    else{
        return false;
    }
}
console.log(last_digit(11, 21, -19));
console.log(last_digit(13, 23, 22));
console.log(last_digit(13, 23, 23));

//2. 임의의 영문자를 받아 처음 세자를 소문자로 바꾸시오.
//   단 문자열의 길이가 3보다 작으면 모두 대문자로 변환합니다.
function front_lower(str){
    if(str.length < 3){
        return str.toUpperCase();
    }
    else{
        //문자열의 길이가 3이상이면 앞의 세자를 잘라 대문자로 변환.
        return (str.substring(0, 3).toLowerCase()) + str.substring(3, str.length);
    }
}
console.log(front_lower("as"));
console.log(front_lower("JAVASCRIPT"));

//3. 두수의 합이 50~80범위 안에 있으면 65를 반환하고 그렇지 않으면 80을 반환하시오.
function sortSum(x, y){
    const sumNum = x + y;
    if(sumNum >= 50 && sumNum <= 80){
        return 65;
    }
    else{
        return 80;
    }
}
console.log(sortSum(30, 20));
console.log(sortSum(90, 80));

//4. 임의의 문자열을 받아 문자열을 거꾸로 출력하시오.
//ex) welcome ==> emoclew
const str_reverse = (str) => {  // function str_reverse(){} 와 같다 !! 함수를 만드는것(호이스팅가능)과 변수를 만들어서 함수를 넣는것(호이스팅 불가능)의 차이!!
   return str.split("").reverse().join("");
}
console.log(str_reverse("javascript"));
console.log(str_reverse("홍길동 바보"));

//6. 주어진 숫자를 시간과 분으로 변환하는 스크립트를 작성하시오.
function clock(x){
    const hours = Math.floor(x / 60);
    const minutes = x % 60;
    return "시간은 " + hours + "시" + minutes + "분 입니다."
}
console.log(clock(450));
console.log(clock(550));
console.log(clock(370));

//7. 주어진 문자열의 문자를 알파벳순으로 변환하는 스크립트를 작성하시오. 
// 문자를 배열로 바꿔서 배열함수 sort()써준다.
function asc(str){
    return str.split("").sort().join(""); //문자열로 받은 str을 split으로 배열로 나눠주고 배열함수 sort로 오름차순하고 다시 join으로 문자열로 만들어준다.
}
console.log(asc("gfedcba"));
console.log(asc("사바마라다나가"));

//8.주어진 문자열의 첫번째 문자와 마지막 문자를 빼고 출력하시오.
function slice(str){
    return str.substring(1 , str.length-1); //시작인덱스, 마지막인덱스
    //return str.substr(1, str.length-2); //시작인덱스, 반환할 개수
}
console.log(slice("안녕하세용"));

//9..두개의 문자를 받아 각 문자의 첫번째 문자를 제거한 후 두 문자를 연결하시오.
//예) PHP, JS ==> HPS
function plus(str1, str2){
    return str1.substring(1,str1.length) + str2.substring(1,str2.length);
}
console.log(plus("PHP","JS"));

//10.문자열이 "Los", 나 "New"로 시작하면 문자를 표시하고 그렇지 않으면 공백을 반환하시오.
//  단, Los, New는 대소문자를 무시합니다. 
function compare(str){
    str = str.toLowerCase();
    if(str.length >= 3){
    if(str.substring(0,3) == "los" || str.substring(0,3) == "new"){
        return str;
    }
    return "";
    }
return "";
}
console.log(compare("newyork"));
console.log(compare("Los Angeles"));
console.log(compare("american Los Angeles"));
console.log(compare("ne"));
