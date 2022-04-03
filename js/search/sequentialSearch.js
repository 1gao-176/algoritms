const subsets = function (nums) {
  const res = [];
  const backtrack = (path, l, start) => {
    console.log(l, start, "22");
    if (l === path.length) {
      res.push(path);
      return;
    }

    for (let j = start; j < nums.length; j++) {
      console.log(l, j + 1, "11");

      backtrack(path.concat(nums[j]), l, j + 1);
    }
  };

  for (let i = 0; i <= nums.length; i += 1) {
    backtrack([], i, 0);
  }
  return res;
};

console.log(subsets([1, 2, 3]));
