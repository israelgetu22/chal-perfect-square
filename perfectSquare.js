function nextPerfectSquare(n) {
  if (n >= 0) {
    let nextNum = Math.floor(Math.sqrt(n)) + 1;
    //console.log(nextNum);
    nextPerSqu = nextNum * nextNum;
    return nextPerSqu;
  } else {
    return -1;
  }
}

nextPerfectSquare(9.2);
console.log("It is " + nextPerSqu);

const perfectSquare = (num) => {
  let square = Math.sqrt(num);
  if (square - Math.floor(square) === 0) {
    square += 1;
    return square * square;
  } else {
    return -1;
  }
};

function perfectSquare(n) {
  let squareRoot = Math.sqrt(n);
  let nextSquare = 0;
  if (!Number.isInteger(squareRoot)) {
    return "Not a perfect square.";
  } else {
    nextSquare = Math.floor(squareRoot) + 1;
  }
  return nextSquare * nextSquare;
}

const perfectSquare = (num) => {
  let square = Math.sqrt(num);
  if (square - Math.floor(square) === 0) {
    square += 1;
    return square * square;
  } else {
    return -1;
  }
};

// import math
// def perfect_square(num):

//   square_root = math.sqrt(num)

//   if square_root.is_integer():
//     square_root += 1
//     next_square = square_root * square_root
//     return int(next_square)
//   else:
//     return -1

const perfectSquare = (squared) => {
  let squareRoot = Math.sqrt(squared);

  if (squareRoot % 1 === 0) {
    squareRoot++;
    return squareRoot * squareRoot;
  } else {
    return -1;
  }
};
