var minimizeMax = function(nums, p) {
    nums.sort((a, b) => a - b);

    const canFormPairs = (maxDiff) => {
        let count = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i - 1] <= maxDiff) {
                count++;
                i++; 
            }
        }
        return count >= p;
    };

    let low = 0;
    let high = nums[nums.length - 1] - nums[0];
    let answer = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (canFormPairs(mid)) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return answer;
};
