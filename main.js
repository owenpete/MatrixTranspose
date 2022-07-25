const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

const matrixTranspose = (matrix) =>{
    let transposedMatrix = [];
    for(let i = 0; i < matrix.length; i++){
        const row = matrix[i];
        let strArr = [];
        for(let j = 0; j < row.length; j++){
            const value = row[j];
            strArr.push(matrix[j][i])
        }
        transposedMatrix.push(strArr);
    }
    return transposedMatrix;
}

const newMatrix = matrixTranspose(matrix);

for(const row of newMatrix){
    console.log(row)
}