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
    let obj = {

    }
    let ret = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let z = j + 1; z < nums.length; z++) {
                if (nums[i] + nums[j] + nums[z] === 0) {
                    let item = [nums[i], nums[j], nums[z]].sort((a, b) => a - b)
                    if (!obj[item]) {
                        obj[item] = true
                        ret.push([nums[i], nums[j], nums[z]])
                    }

                }

            }
        }
    }

    return [...new Set(ret)]
};
// @lc code=end