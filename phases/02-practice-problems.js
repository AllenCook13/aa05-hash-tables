function anagrams(str1, str2) {
  for(let i = 0; i < str1.length; i++) {
    if(!str1.includes(str2[i])) return false;
  }
  return true;
}


function commonElements(arr1, arr2) {
  let res = [];
  let small;
  let big;
  if(arr1.length < arr2.length) {
    small = arr1;
    big = arr2
  } else {
    small = arr2;
    big = arr1;
  }
  for(let i = 0; i < small.length; i++) {
    if(big.includes(small[i])) {
      res.push(small[i]);
    }
  }
  return res;
  
   
}


function duplicate(arr) {
  let counter = {};
  for(let num of arr) {
    if(counter[num] === undefined) {
      counter[num] = 1;
    } else {
      return num;
    }
  }
}


function twoSum(nums, target) {
  const obj = {};
  for (const num of nums) {
      if (obj[target - num]) {
        return true;
      }
      obj[num] = true;
  }
  return false;
}


function wordPattern(pattern, strings) {
   
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
