/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []
    let list = []
    nums.sort((a, b) =>
        a - b
    )
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1;
        let right = nums.length - 1
        while (left < right) {

            if (nums[i] + nums[left] + nums[right] === 0) {
                list.push([nums[i], nums[left], nums[right]])
                while (nums[right] === nums[right - 1]) {
                    right--
                }
                while (nums[left] === nums[left + 1]) {
                    left++
                }
                left++
                right--
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return list
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end