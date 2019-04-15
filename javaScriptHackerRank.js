//jshint esversion:6
function Day1() {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');

  var input_stdin = "";
  var input_stdin_array = "";
  var input_currentline = 0;

  process.stdin.on('data', function(data) {
    input_stdin += data;
  });

  process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split("\n");
    main();
  });

  // Reads complete line from STDIN
  function readLine() {
    return input_stdin_array[input_currentline++];
  } //readLine

  function main() {
    var i = 4;
    var d = 4.0;
    var s = "HackerRank ";
    // Declare second integer, double, and String variables.
    var a, b, c;
    // Read and save an integer, double, and String to your variables.
    a = parseInt(readLine());
    b = parseFloat(readLine());
    c = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + a);
    // Print the sum of the double variables on a new line.
    console.log((d + b).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + c);

  } //function main
} //Day1


function Day2() {
  'use strict';

  process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  let inputString = '';
  let currentLine = 0;

  process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
  });

  process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
      .split('\n')
      .map(str => str.replace(/\s*$/, ''));

    main();
  });

  function readLine() {
    return inputString[currentLine++];
  }

  // Complete the solve function below.
  function solve(meal_cost, tip_percent, tax_percent) {
    const tip = meal_cost * (tip_percent / 100);
    const tax = meal_cost * (tax_percent / 100);
    const total = Math.round(meal_cost + tip + tax);
    console.log(total);

  }

  function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
  }
} //Day2

function Day3(){
    'use strict';

  process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  let inputString = '';
  let currentLine = 0;

  process.stdin.on('data', inputStdin => {
      inputString += inputStdin;
  });

  process.stdin.on('end', _ => {
      inputString = inputString.replace(/\s*$/, '')
          .split('\n')
          .map(str => str.replace(/\s*$/, ''));

      main();
  });

  function readLine() {
      return inputString[currentLine++];
  }

  function main() {

      const N = parseInt(readLine(), 10);
      if (N % 2 == 0) {
          switch (true) {
              case (2 <= N && N <= 5):
                  console.log('Not Weird');
                  break;
              case (6 <= N && N <= 20):
                  console.log('Weird');
                  break;
              case (N > 20):
                  console.log('Not Weird');
                  break;
          }
      } else {
          console.log('Weird');
      }

  }//main()
}

//condition
function Day4(){
  process.stdin.resume();
  process.stdin.setEncoding('ascii');

  var input_stdin = "";
  var input_stdin_array = "";
  var input_currentline = 0;

  process.stdin.on('data', function (data) {
      input_stdin += data;
  });

  process.stdin.on('end', function () {
      input_stdin_array = input_stdin.split("\n");
      main();
  });

  function readLine() {
      return input_stdin_array[input_currentline++];
  }

  function Person(initialAge) {
      // Add some more code to run some checks on initialAge
      if ( initialAge >= 0 ){
          this.age = initialAge;
      } else {
          this.age = 0;
          console.log('Age is not valid, setting age to 0.');
      }
    this.amIOld=function(){
     // Do some computations in here and print out the correct statement to the console
        switch (true) {
            case (this.age < 13):
                console.log('You are young.');
                break;
            case (this.age >= 13 && this.age < 18):
                console.log('You are a teenager.');
                break;
            default:
                console.log('You are old.');
                break;
          }
    };
     this.yearPasses=function(){
            // Increment the age of the person in here
            this.age++;
     };
  }

  function main() {
  var T=parseInt(readLine());
  for(i=0;i<T;i++){
      var age=parseInt(readLine());
      var p=new Person(age);
      p.amIOld();
      for(j=0;j<3;j++){
          p.yearPasses();

      }
      p.amIOld();
      console.log("");
      }
  }// for i

}//function Day4

// a variable declared with var is defined throughout the program as compared to let.
//var is function scoped and let is block scoped.
function Day5(){
  'use strict';

  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  
  let inputString = '';
  let currentLine = 0;
  
  process.stdin.on('data', inputStdin => {
      inputString += inputStdin;
  });
  
  process.stdin.on('end', _ => {
      inputString = inputString.replace(/\s*$/, '')
          .split('\n')
          .map(str => str.replace(/\s*$/, ''));
  
      main();
  });
  
  function readLine() {
      return inputString[currentLine++];
  }

  function main() {
      const n = parseInt(readLine(), 10);
      for (let i = 1; i <= 10; i++){
          console.log(n + ' x '+ i +' = ' + (n * i));
      }
  }
}//Day 5

//teneary operator
function Day6(){
  function processData(input) {
      //Enter your code here
      let inputCopy = input.split('\n').slice(1);//from the second element
      inputCopy.forEach((str) => {
          let evenStr = '';
          let oddStr = '';
          for (let i = 0; i < str.length; i++) {
              i % 2 ? oddStr += str[i] : evenStr += str[i];// 1 is equivalent to true
          }
          console.log(`${evenStr} ${oddStr}`);// string conta
      });
  } 

  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  _input = "";
  process.stdin.on("data", function (input) {
      _input += input;
  });

  process.stdin.on("end", function () {
    processData(_input);
  });
}//Day6

//Array and .join()
function Day7(){
  'use strict';

  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  
  let inputString = '';
  let currentLine = 0;
  
  process.stdin.on('data', inputStdin => {
      inputString += inputStdin;
  });
  
  process.stdin.on('end', _ => {
      inputString = inputString.replace(/\s*$/, '')
          .split('\n')
          .map(str => str.replace(/\s*$/, ''));
  
      main();
  });
  
  function readLine() {
      return inputString[currentLine++];
  }
  
  
  
  function main() {
      const n = parseInt(readLine(), 10);
      const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  
      console.log(arr.reverse().join(' '));
  }

}//Day 7

// Key-Value pair mappings using a Map or Dictionary data structure. 
function Day8(){
  function processData(input) {
      var tempArray = input.split("\n");
      var entriesLength = tempArray.shift(); 
      var queries = tempArray.splice(entriesLength);

      for (var i = 0; i < entriesLength; i++) {
          tempArray[i] = tempArray[i].split(" ");
      }

      var phoneBookMap = new Map(tempArray);

      for (var i = 0; i < queries.length; i++) {
          if (phoneBookMap.has(queries[i])) { 
              console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
          } else {
              console.log("Not found");
          }
      }
  } 

  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  _input = "";
  process.stdin.on("data", function (input) {
      _input += input;
  });

  process.stdin.on("end", function () {
    processData(_input);
  });

}//Day 8

//Recursion
function Day9 (){
    'use strict';

    const fs = require('fs');

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
    });

    process.stdin.on('end', _ => {
        inputString = inputString.replace(/\s*$/, '')
            .split('\n')
            .map(str => str.replace(/\s*$/, ''));

        main();
    });

    function readLine() {
        return inputString[currentLine++];
    }

    // Complete the factorial function below.
    function factorial(n) {
        return (n > 1 ? n * factorial(n - 1) : n)   
    }

    function main() {
        const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

        const n = parseInt(readLine(), 10);

        let result = factorial(n);

        ws.write(result + "\n");

        ws.end();
    }

} //Day 9

//Binary
function Day10() {
    'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
    });

    process.stdin.on('end', _ => {
        inputString = inputString.replace(/\s*$/, '')
            .split('\n')
            .map(str => str.replace(/\s*$/, ''));

        main();
    });

    function readLine() {
        return inputString[currentLine++];
    }



    function main() {
        const n = parseInt(readLine(), 10);
        console.log(Math.max(...Number(n).toString(2).split(/0+/).map(e => e.length)))
    }

}//Day 10

function Day11() {
    'use strict';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';
    let currentLine = 0;

    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
    });

    process.stdin.on('end', _ => {
        inputString = inputString.replace(/\s*$/, '')
            .split('\n')
            .map(str => str.replace(/\s*$/, ''));

        main();
    });

    function readLine() {
        return inputString[currentLine++];
    }



    function main() {
        let arr = Array(6);

        for (let i = 0; i < 6; i++) {
            arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
        }

        //setting highestSum initially to -63 because that is lowest possible outcome for hourglass.
        //-9 -9 -9
        //   -9
        //-9 -9 -9
        // = -63
        var highestSum = -63;
        var tempSum = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                tempSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
                if (tempSum > highestSum) {
                    highestSum = tempSum;
                }
            }
        }

        console.log(highestSum);
        
        for (let i = 0; i < 6; i++) {
            arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
        }
    }
}//Day 11


//about classes and constructors
function Day12() {
    'use strict';

    var _input = '';
    var _index = 0;
    process.stdin.on('data', (data) => { _input += data; });
    process.stdin.on('end', () => {
        _input = _input.split(new RegExp('[ \n]+'));
        main();    
    });
    function read() { return _input[_index++]; }
    
    /**** Ignore above this line. ****/
    
    class Person {
        constructor(firstName, lastName, identification) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.idNumber = identification;
        }
        
        printPerson() {
            console.log(
                "Name: " + this.lastName + ", " + this.firstName 
                + "\nID: " + this.idNumber
            )
        }
    }
    
    class Student extends Person {
       
        constructor(firstName, lastName, id, scores) {
            super(firstName, lastName, id)
            this.scores = scores
        }
        calculate() {
            let avg_score = this.scores.reduce(getSum) / this.scores.length
            if (avg_score >= 90) {
                return 'O'
            } else if (avg_score >= 80) {
                return 'E'
            } else if (avg_score >= 70) {
                return 'A'
            } else if (avg_score >= 55) {
                return 'P'
            } else if (avg_score >= 40) {
                return 'D'
            } else {
                return 'T'
            }
        }
    }
    
    function getSum(total, num) {
        return total + num
    }
    
    function main() {
        let firstName = read()
        let lastName = read()
        let id = +read()
        let numScores = +read()
        let testScores = new Array(numScores)
        
        for (var i = 0; i < numScores; i++) {
            testScores[i] = +read()  
        }
    
        let s = new Student(firstName, lastName, id, testScores)
        s.printPerson()
        s.calculate()
        console.log('Grade: ' + s.calculate())
    }
    
}//Day12