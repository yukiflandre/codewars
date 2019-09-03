// John has invited some friends.His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name.Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
    return s.toUpperCase().split(";").map(ele => ele.split(":").reverse().join(', ')).sort().map(ele => `(${ele})`).join("")
}
s = "Ann:Wahl;Ann:Wahl"


function quickSort(arr) {
    let left = 0,
        right = arr.length - 1;
    //console.time('QuickSort');
    main(arr, left, right);
    //console.timeEnd('QuickSort');
    return arr;
    function main(arr, left, right) {
        // 递归结束的条件，直到数组只包含一个元素。
        if (arr.length === 1) {
            // 由于是直接修改arr，所以不用返回值。
            return;
        }
        // 获取left指针，准备下一轮分解。
        let index = partition(arr, left, right);
        if (left < index - 1) {
            // 继续分解左边数组。
            main(arr, left, index - 1);
        }
        if (index < right) {
            // 分解右边数组。
            main(arr, index, right);
        }
    }
    // 数组分解函数。
    function partition(arr, left, right) {
        // 选取中间项为参考点。
        let pivot = arr[Math.floor((left + right) / 2)];
        // 循环直到left > right。
        while (left <= right) {
            // 持续右移左指针直到其值不小于pivot。
            while (arr[left] < pivot) {
                left++;
            }
            // 持续左移右指针直到其值不大于pivot。
            while (arr[right] > pivot) {
                right--;
            }
            // 此时左指针的值不小于pivot，右指针的值不大于pivot。
            // 如果left仍然不大于right。
            if (left <= right) {
                // 交换两者的值，使得不大于pivot的值在其左侧，不小于pivot的值在其右侧。
                [arr[left], arr[right]] = [arr[right], arr[left]];
                // 左指针右移，右指针左移准备开始下一轮，防止arr[left]和arr[right]都等于pivot然后导致死循环。
                left++;
                right--;
            }
        }
        // 返回左指针作为下一轮分解的依据。
        return left;
    }
}

