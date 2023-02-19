function staircase(n) {
    let hashes = ["#"];
    for (let i = 1 ; i < n ; i++) {
        console.log(hashes);
        hashes.push("#");
    }
    console.log(hashes);
}

staircase(6);