/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i =1;
    while(i<nums.length){
        if(nums[i] === nums[i-1]){
            nums.splice(i,1);
        }
        if(nums[i]!== nums[i-1]){
            i+=1
        }
      
    }
    return nums.length
};
