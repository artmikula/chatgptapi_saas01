const beeramid = (money, price) => {
    let level = 0;
    let total = 0;
    while (total <= money) {
        level++;
        total += (level * level) * price;
        console.log(level, total);
    }
    return level - 1;
}

console.log(beeramid(1500, 2)); // 12