import React from "react";

const ArrTest = () => {

    const oddNumAdd = () => {
        var sumNumbers1 = [1, 2, 3, 4, 5];
        var sumNumbers2 = [2, 3, 4, 6, 9];
        var sumNumbers3 = [1, 3, 5, 7, 9];
        var totalNumbers = [sumNumbers1, sumNumbers2, sumNumbers3];
        for(var i = 0; i < totalNumbers.length; i++){
            var result = 0;
            for(var j = 0; j < totalNumbers[i].length; j++){
                if(totalNumbers[i][j]%2 === 1){
                    result += sumNumbers1[j];
                }
            }
            console.log(result);
        }
    }

    const dupliDel = () => {
        const mergeArr1 = [[1, 2, 3, 4], [3, 4, 5]];
        const mergeArr2 = [['a', 'b'],['b', 'c', 'd']];
        const mergeArr3 = [[], [1, 2, 3, 4]];
        const sumMerge = [mergeArr1, mergeArr2, mergeArr3];
        for(var i = 0; i < sumMerge.length; i++){
            var totalMerge = [];
            for(var j = 0; j < sumMerge[i].length-1; j++){
                totalMerge = sumMerge[i][j].concat(sumMerge[i][j+1]);
                totalMerge = [...new Set(totalMerge)];
                console.log(totalMerge);
            }
        }
    }
    
    const delayfunc = () => {
        return new Promise((resolve, reject) => {
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