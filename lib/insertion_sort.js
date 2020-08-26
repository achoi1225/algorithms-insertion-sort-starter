function insertionSort(list) {
// for i from 1 to length(list) inclusive do:
for(let i = 1 ; i < list.length; i ++){
  let valueToInsert = list[i];
  let holePosition = i ;

    while(holePosition > 0 && list[holePosition - 1] > valueToInsert){
        list[holePosition] = list[holePosition - 1];
        holePosition = holePosition - 1;
  }

  list[holePosition] = valueToInsert;
}
return list;
//   /* select value to be inserted */
//   valueToInsert = list[i]
//   holePosition = i

//   /* locate hole position for the element to be inserted */

//   while holePosition > 0 and list[holePosition-1] > valueToInsert do:
//     list[holePosition] = list[holePosition-1]
//     holePosition = holePosition -1
//   end while

//   /* insert the number at hole position */
//   list[holePosition] = valueToInsert

// end for
}

const arr1 = [43, 22, 108, 6, 17, 76, 21]; 
console.log(insertionSort(arr1));

module.exports = {
  insertionSort
};
