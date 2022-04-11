/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i]
        let val = target - element
        if (map.get(val) == undefined) {
            map.set(element, i)
        } else {
            return [i, map.get(val)]
        }
    }
};
// @lc code=end