import React from 'react';
import data from '../config/data.json';

const GammaTable = () => {

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

  // Created a new array of objects with the gamma object
  const gammaData = data.map((elem) => ({
    ...elem,
    Gamma: (elem.Ash - elem.Hue)/elem.Magnesium
  }))

  // Filtered the array of objects according to the alcohol type
  const gamma1 = gammaData.filter(elem => elem.Alcohol === 1);
  const gamma2 = gammaData.filter(elem => elem.Alcohol === 2);
  const gamma3 = gammaData.filter(elem => elem.Alcohol === 3);

  // Created array of gamma values for all alcohol classes
  let gammaArr1 = [];
  gamma1.forEach(ele => {
    gammaArr1.push(ele.Gamma);
  })

  let gammaArr2 = [];
  gamma2.forEach(ele => {
    gammaArr2.push(ele.Gamma);
  })

  let gammaArr3 = [];
  gamma3.forEach(ele => {
    gammaArr3.push(ele.Gamma);
  })

    return (
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
                    <th>Gamma Mean</th>
                    <td>{(sum(gammaArr1)/2).toFixed(3)}</td>
                    <td>{(sum(gammaArr2)/2).toFixed(3)}</td>
                    <td>{(sum(gammaArr3)/2).toFixed(3)}</td>
                </tr>
                <tr>
                    <th>Gamma Median</th>
                    <td>{median(gammaArr1).toFixed(3)}</td>
                    <td>{median(gammaArr2).toFixed(3)}</td>
                    <td>{median(gammaArr3).toFixed(3)}</td>
                </tr>
                <tr>
                    <th>Gamma Mode</th>
                    <td>{mode(gammaArr1).toFixed(3)}</td>
                    <td>{mode(gammaArr2).toFixed(3)}</td>
                    <td>{mode(gammaArr3).toFixed(3)}</td>
                </tr>
          </tbody>
        </table>
    )
}

export default GammaTable;