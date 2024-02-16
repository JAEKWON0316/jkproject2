/*1.Q. 정수로 된 배열 두 개가 있다.
  이 두 배열중 같은 수가 하나라도 있다면 true를
  없으면 false를 출력하라.*/
  function same_array(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) != -1){ //arr2의 배열값을 arr1[i]들과 비교해보고 같은 값이 있으면 -1 이상 없으면 -1
            return true;
        }
    }
    return false;
}
console.log(same_array(["철수", "영희", "순이"], ["민수", "정희", "진희"]));

/*2.  임의의 문자열이 소문자 사이에 대문자가 있거나 대문자 사이에 소문자가 있는지 확인하는 스크립트를 작성하라.
       예) xYz ==> true  XyZ==> true 
*/

function test_str(str){
    //소문자 인지 확인
    let is_lower_case = function(s){ //is_lower_case라는 변수에 함수를 대입
        if('a' <= s && s <= 'z'){
            return true;
        }
        return false;
    }
    //대문자 인지 확인
    let is_upper_case = function(s){
        if('A' <= s && s <= 'Z'){
            return true;
        }
        return false;
    }
    //첫번째 글자가 소문자 또는 대문자 인지 확인
    let is_first_char_lower = is_lower_case(str[0]),
        is_first_char_upper = is_upper_case(str[0]);

    //대소문자에 속하지 않으면 무조건 false
    if(!(is_first_char_lower || is_first_char_upper)){
        return false;
    }

    for(let i = 1; i < str.length; i++){
        if(i % 2){ //i를 2로 나눈 나머지가 0 일 때 => 즉, false(0) 홀수 일 떄를 뜻한다.
            if(is_lower_case(str[i]) === is_first_char_lower ||
               is_upper_case(str[i]) === is_first_char_upper){
                    return false;
            }
        }
    }
    return true;
}
console.log(test_str('xYz'));
console.log(test_str('zzYzYzz'));
console.log(test_str('aBcBccc'));

/*양의정수를 받아 한자리를 삭제했을때 최대 숫자가 남도록 스크립트를 작성하라.
예) 100 ==> 10    576==> 76 */

/*
 function one_del(num) {
                //최대 결과 개수를 저장할 변수를 만듬
        let result = 0;
        //하나하나의 숫자를 배열로 저장
        let num_digits = [];

        //각각의 자리수를 추출하여 num_digits배열에 저장
        //10으로 나눈 나머지(마지막 자리수)를 저장한 후 10으로 나누어 마지막 자리를 없앤다.
        while(num){
            num_digits.push(num % 10);
            num = Math.floor( num / 10 );
        }
        //내림차순 정렬
        num_digits.sort(function(a, b){
            return b-a;
        });
        console.log(num_digits);
        num_digits.pop();
        return Number(num_digits.join(''));
    }
    */

function one_del(num){
    //최대 결과 개수를 저장할 변수를 만듦
    let result = 0;
    //하나하나의 숫자를 배열로 저장
    let num_digits = [];

    //각각의 자리수를 추출하여 num_digits배열에 저장
    while(num){
        num_digits.push(num % 10); //10으로 나눈 나머지를(마지막 자리수)를 저장  -->push는 마지막 인덱스에 삽입
        num = Math.floor(num / 10); //마지막 자리수를 10으로 나누어 마지막 자리를 없앤다.
    }

    for(let i = 0; i < num_digits.length; i++){
        //새로 생성되는 숫자를 저장할 임시 변수 생성
        let n = 0;
        //한자리수를 뺀 숫자를 생성
        for(let j = num_digits.length-1; j >= 0; j--){
            if(j != i){
                n = n * 10 + num_digits[j];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}
console.log(one_del(100));
console.log(one_del(1245));

//4. 임의의 숫자를 한 자리 수로 변환될때 까지 계속 더하는 스크립트를 작성하라.
//예 1234 ==> 1+2+3+4 +5 = 15 ==> 1 + 5 = 최종 6

function num_add(num){
    let digitSum = function(num){
        let dsum = 0;
        while(num){
            dsum += num % 10;
            num = Math.floor(num / 10);
        }
       return dsum;
    }
   
    while(num >= 10){
        num = digitSum(num);
    }
    return num; 
}
console.log(num_add(12345));