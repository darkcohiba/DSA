const containsDuplicate = function(nums) {
    const map = {}
    for(const num of nums) {
        if(map[num]) return true
        map[num] = true
    }
    return false
};

x= [1, 1,  3, 4, 5, 10]


console.log(containsDuplicate(x))