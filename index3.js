let arr =  [[5,4,3,2,1],
            [6,7,8,9,1],
            [3,2,5,4,6],
            [7,8,9,1,2]
        ];
let N = 4;
let M = 5;
let str = "";
for(i=0; i<N; i++){
    for(j=0; j<M; j++){
        str += arr[i][j] + " "
    }
}
console.log(str)