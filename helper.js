/ const greaterThan = (num1, num2) => {
  //   return num1 > num2 ? num1 : num2;
  // };
  
  //console.log(greaterThan(1, 4));
  
  //INPUT first number
  //INPUT Second number
  
  //IF first number is greater than second number
  //RETURN first number
  
  //ElSE
  //RETURN second number;
  
  //END IF
  
  //END function
  
  // const printNumbers = () => {
  //   let num = 1;
  
  //   while (num <= 100) {
  //     console.log(num);
  //     num++;
  //   }
  // };
  
  // printNumbers();
  
  /*CREATE function printNumbers 
    
    INIT number to 1
  
    WHILE number less than or equal to 100 
  
    LOG num 
  
  
  
  
  */
  
  // let arr1 = [200, 225, 350, 459, 800, 1000];
  // let arr2 = [200, 350, 460, 700, 1000];
  
  // const findDuplicates = (arr1, arr2) => {
  //   let duplicates = [];
  //   let i = 0;
  //   let j = 0;
  
  //   while (i < arr1.length && j < arr2.length) {
  //     if (arr1[i] == arr2[j]) {
  //       duplicates.push(arr1[i]);
  //       i++;
  //       j++;
  //     } else if (arr1[i] < arr2[j]) {
  //       i++;
  //     } else {
  //       j++;
  //     }
  //   }
  //   return duplicates;
  // };
  
  // console.log(findDuplicates(arr1, arr2));
  
  const names = ["Alex", "Sarah", "Ben", "George"];
  
  const searchNames = arr => {
    let name = "Sarah";
    while (name !== "Sarah") {
      arr++;
    }
    return name;
  };
  
  console.log(searchNames());
  