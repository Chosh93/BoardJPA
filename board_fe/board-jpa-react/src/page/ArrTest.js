import React from "react";

const ArrTest = () => {
    const oddNumAdd = () => {
        var sumNumbers1 = [1, 2, 3, 4, 5];
        var sumNumbers2 = [2, 3, 4, 6, 9];
        var sumNumbers3 = [1, 3, 5, 7, 9];
        var totalNumbers = [sumNumbers1, sumNumbers2, sumNumbers3];
        // for(var i = 0; i < totalNumbers.length; i++){                totalNumbers의 길이만큼 3번 반복 동작 
        //     var result = 0;                                          콘솔에 찍을 값 초기화
        //     for(var j = 0; j < totalNumbers[i].length; j++){         totalNumbers[i]의 길이만큼 동작 5
        //         if(totalNumbers[i][j]%2 === 1){                      totalNumbers[i][j]를 2로 나눈 나머지가 1이면 홀수
        //             result += totalNumbers[i][j];                    result에 홀수값 더함
        //         }
        //     }
        //     console.log(result);
        // }
        
        // 배열의 처음부터 마지막까지 모두 순회
        totalNumbers.forEach(arr => {                                // totalNumbers 순회하고 arr로 저장
            var result = 0;                                          // 콘솔에 찍을 값 저장
            arr.forEach((number) => {                                // arr 순회하며 number로 저장
                if(number % 2 === 1) {                               // number를 2로 나눈 나머지가 1이면 홀수
                    result += number;                                // result에 홀수값 더함
                }
            });
            console.log(result);
        });
    }

    const dupliDel = () => {
        const mergeArr1 = [[1, 2, 3, 4], [3, 4, 5]];
        const mergeArr2 = [['a', 'b'],['b', 'c', 'd']];
        const mergeArr3 = [[], [1, 2, 3, 4]];
        const sumMerge = [mergeArr1, mergeArr2, mergeArr3];
        // for(var i = 0; i < sumMerge.length; i++){
        //     var totalMerge = [];
        //     for(var j = 0; j < sumMerge[i].length-1; j++){
        //         totalMerge = sumMerge[i][j].concat(sumMerge[i][j+1]);
        //         totalMerge = [...new Set(totalMerge)];
        //         console.log(totalMerge);
        //     }
        // }
        sumMerge.forEach(arr => {                                   // sumMerge를 순회하며 arr에 저장
            var totalMerge = [];                                    // 출력값 조기화
            arr.forEach((subArr, index) => {                        // arr을 순회하며 요소의 값을 subArr에 저장 요소의 인덱스를 index에 저장
                if(index < arr.length-1){                           // 인덱스가 (arr의 길이 - 1)보다 작으면 
                    totalMerge = subArr.concat(arr[index+1]);       // totalMerge에 subArr뒤에 concat함수로 arr[index+1] 배열을 붙힌다.
                    totalMerge = [...new Set(totalMerge)];          // totalMerge를 spread operator로 중복제거
                    console.log(totalMerge);
                }
            });
        });
    }
    
    const delayfunc = () => {
        return new Promise(() => {
            setTimeout(() => {
                console.log("Hello");
            }, 2000);
            setTimeout(() => {
                console.log("12345");
            }, 1000);
        })
        setTimeout(() => console.log("12345"), 1000);
        setTimeout(() => console.log("Hello"), 2000);
    }

    const reversArr = () => {
        var arr1 = [1, 2, 3, 4, 5];
        var arr2 = ['a', 'b', 'c', 'd', 'e'];
        console.log([...arr1].reverse());
        console.log([...arr2].reverse());
    }

    return (
        <>
        <button onClick={oddNumAdd}>oddNum</button>
        <button onClick={dupliDel}>dupliDel</button>
        <button onClick={delayfunc}>delay button</button>
        <button onClick={reversArr}>revers array button</button>
        </>
    )
}

export default ArrTest;