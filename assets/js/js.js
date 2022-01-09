var allNumber = [];
var realNumber = [];

function totalPos(allNumber) {
  var totalPos = 0;
  allNumber.forEach(function (pos) {
    if (pos >= 0) {
      totalPos += pos;
    }
  });
  document.getElementById("totalPos").innerText = totalPos;
}

function countPos(allNumber) {
  var count = 0;
  allNumber.forEach(function (pos) {
    if (pos >= 0) {
      count++;
    }
  });
  document.getElementById("totalCountPos").innerText = count;
}

function smallestNum(allNumber) {
  var smallestNumber = allNumber[0];

  allNumber.forEach(function (num) {
    if (num < smallestNumber) {
      smallestNumber = num;
    }
  });
  document.getElementById("smallestNum").innerText = smallestNumber;
}

function smallestPostNum(allNumber) {
  var posArr = [];
  var smallestPosNumber;

  for (var i = 0; i < allNumber.length; i++) {
    if (allNumber[i] >= 0) {
      posArr.push(allNumber[i]);
    }
  }

  smallestPosNumber = posArr[0];

  allNumber.forEach(function (num) {
    if (num <= smallestPosNumber && num >= 0) {
      smallestPosNumber = num;
    }
  });

  document.getElementById("smallestPosNum").innerText = smallestPosNumber;
}

function lastEvenNumber(allNumber) {
  var lastEvenNum = -1;
  allNumber.forEach(function (num) {
    if (num % 2 == 0) {
      lastEvenNum = num;
    }
    return lastEvenNum;
  });
  document.getElementById("lastEvenNum").innerText = lastEvenNum;
}

function arrayMove(allNumber, fromIndex, toIndex) {
  var newArr = allNumber.slice();
  var element1 = newArr[fromIndex];
  var element2 = newArr[toIndex];
  newArr.splice(fromIndex, 1, element2);
  newArr.splice(toIndex, 1, element1);

  document.getElementById("newArr").innerText = newArr;
}

function sortArr(allNumber) {
  var newArr = allNumber.slice();
  newArr.sort();
  document.getElementById("sortArr").innerText = newArr;
}

function findPrime(allNumber) {
  function checkPrime(number) {
    if (number < 2) return false;
    for (var i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
    return true;
  }

  var newArr = [];

  allNumber.forEach(function (num) {
    if (checkPrime(num)) {
      newArr.push(num);
    }
  });

  if (newArr.length <= 0) {
    document.getElementById("primeNumber").innerText = -1;
  } else {
    document.getElementById("primeNumber").innerText = newArr[0];
  }
}

function checkPosNe(allNumber) {
  var countPos = 0;
  var countNe = 0;
  allNumber.forEach(function (num) {
    if (num > 0) {
      countPos++;
    } else {
      countNe++;
    }
  });

  document.getElementById("posNumber").innerText = countPos;
  document.getElementById("neNumber").innerText = countNe;

  if (countPos > countNe) {
    document.getElementById("compareNumber").innerText =
      "Số dương nhiều hơn số âm";
  }
  if (countNe > countPos) {
    document.getElementById("compareNumber").innerText =
      "Số âm nhiều hơn số dương";
  }
  if (countNe == countPos) {
    document.getElementById("compareNumber").innerText = "Bằng nhau";
  }
}

function tinhToan() {
  var number = document.getElementById("numValue").value * 1;
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  allNumber.push(number);
  document.getElementById("originArr").innerText = allNumber;

  totalPos(allNumber);
  countPos(allNumber);
  smallestNum(allNumber);
  smallestPostNum(allNumber);
  lastEvenNumber(allNumber);
  arrayMove(allNumber, num1, num2);
  sortArr(allNumber);
  findPrime(allNumber);
  checkPosNe(allNumber);
}

function tinhToan1() {
  var number1 = document.getElementById("num1Value").value * 1;
  realNumber.push(number1);
  function checkInteger(realNumber) {
    var count = 0;
    realNumber.forEach(function (num) {
      if (Number.isInteger(num)) {
        count++;
      }
    });
    document.getElementById("integerNumber").innerText = count;
  }
  checkInteger(realNumber);
  console.log(realNumber);
}
