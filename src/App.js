import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [thePixelGame, setThePixelGame] = useState(
    [
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
  );

  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);

  const delayMillisecond = 100;


  var colorArray = [
    ["white", "#ffeaea", "#ffd7d7", "#ffa5a5", "#ff7474", "red"],
    ["white", "#eaffea", "#d7ffd7", "#a5ffa5", "#74ff74", "green"],
    ["white", "#eaeaff", "#d7d7ff", "#a5a5ff", "#7474ff", "blue"],
    ["white", "#ffffea", "#ffffd7", "#ffffa5", "#ffff74", "yellow"],
    ["white", "#eaeaff", "#d7d7ff", "#a5a5ff", "#7474ff", "purple"],
    ["white", "#ffeaeaff", "#ffd7d7", "#ffa5a5", "#ff7474", "pink"]
  ];

  useEffect(() => {
    const paletteInterval = setInterval(() => {
      setCurrentPaletteIndex((prevIndex) => (prevIndex + 1) % colorArray.length);
    }, 1000);

    return () => clearInterval(paletteInterval);
  }, []);




  useEffect(() => {
    const delay = (ms) => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    (async function () {
      for (let i = 0; i < 100; i++) {
        setThePixelGame((prevArr) => {
          const newArr = prevArr.map(row => [...row]);  // Create a new 2D array

          for (let a = 0; a < newArr.length; a++) {
            for (let j = newArr[a].length - 1; j >= 0; j--) {
              if (newArr[a][j] !== 0) {
                if (newArr[a][j + 1] === 0) {
                  newArr[a][j + 1] = newArr[a][j];
                }
                newArr[a][j] -= 1;
              }
            }
          }

          return newArr;
        });

        await delay(delayMillisecond);

        const number = Math.floor((Math.random() * thePixelGame.length));
        setThePixelGame((prevArr) => {
          const newArr = prevArr.map(row => [...row]);  // Create a new 2D array

          if (newArr[number][0] === 0 && newArr[number][1] === 0) {
            newArr[number][0] = colorArray[currentPaletteIndex].length - 1;
          }

          return newArr;
        });
      }
    })();
  }, []);

  useEffect(() => {
    console.log("this", thePixelGame);
  }, [thePixelGame]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "3px"
      }}>
        {
          thePixelGame.map((row, rowIndex) =>
            <div key={rowIndex} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              {
                row.map((item, colIndex) =>
                  <div key={colIndex} style={{
                    width: "5px",
                    height: "5px",
                    background: colorArray[currentPaletteIndex][item]
                  }}></div>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
