import React from 'react';
import data from '../config/data.json';

const FlavanoidTable = () => {

    // Filtered the array of objects according to the alcohol type
  const alcohol1 = data.filter(elem => elem.Alcohol === 1);
  const alcohol2 = data.filter(elem => elem.Alcohol === 2);
  const alcohol3 = data.filter(elem => elem.Alcohol === 3);

  // Created array of flavanoid values for all alcohol classes
  let flavArr1 = [];
  alcohol1.forEach(ele => {
    flavArr1.push(ele.Flavanoids);
  })

  let flavArr2 = [];
  alcohol2.forEach(ele => {
    flavArr2.push(ele.Flavanoids);
  })

  let flavArr3 = [];
  alcohol3.forEach(ele => {
    flavArr3.push(ele.Flavanoids);
  })

  // Function to determine the sum of all the flavanoid or gamma values in the array
  const sum = (arr) => arr.reduce(function(a, b) {
    return a + b;
  }, 0);

  // Function to determine the Median value of all the flavanoid or gamma values
  const median = (arr) => {
    const len = arr.length;
    
    arr.sort((a, b) => a - b);
    
    if (len % 2 === 0) {
      return (arr[len / 2 - 1] + arr[len / 2]) / 2;
    }
    
    return arr[(len - 1) / 2];
  };

  // Function to determine mode of all the flavanoid or gamma values
  const mode = arr => {
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < arr.length; i++) {
      const item = arr[i];
      
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
     
    return max;
  };

    return(
        <table className="table">
          <thead>
            <tr>
              <th>Measure</th>
              <th>Alcohol-1</th>
              <th>Alcohol-2</th>
              <th>Alcohol-3</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                    <th>Flavanoid Mean</th>
                    <td>{sum(flavArr1)/2}</td>
                    <td>{sum(flavArr2)/2}</td>
                    <td>{(sum(flavArr3)/2).toString()}</td>
                </tr>
                <tr>
                    <th>Flavanoid Median</th>
                    <td>{median(flavArr1)}</td>
                    <td>{median(flavArr2)}</td>
                    <td>{median(flavArr3)}</td>
                </tr>
                <tr>
                    <th>Flavanoid Mode</th>
                    <td>{mode(flavArr1)}</td>
                    <td>{mode(flavArr2)}</td>
                    <td>{mode(flavArr3)}</td>
                </tr>
          </tbody>
        </table>
    );
}

export default FlavanoidTable;