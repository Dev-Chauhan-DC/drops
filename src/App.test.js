import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [thePixelGame, setThePixelGame] = useState([0, 1, 2, 3, 4, 5, 0, 0, 0]);
  const colorArray = ["black", "red", "#ff7474", "#ffa5a5", "#ffd7d7", "#ffeaea"];

  useEffect(() => {
    const delay = (ms) => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    (async function () {
      for (let i = 0; i < 100; i++) {
        setThePixelGame((prevArr) => {
          const newArr = [...prevArr];

          for (let j = newArr.length - 1; j >= 0; j--) {
            if (newArr[j] !== 0) {
              if (newArr[j + 1] === 0) {
                newArr[j + 1] = newArr[j];
              }
              newArr[j] -= 1;
            }
          }
          return newArr;
        });

        await delay(100);

        const number = Math.floor((Math.random() * 5) + 1);
        if (number === 1) {
          setThePixelGame((prevArr) => {
            const newArr = [...prevArr];
            if (newArr[0] === 0) {
              if (newArr[1] === 0) {
                newArr[0] = 5;
              }
            }
            return newArr;
          });
        }
      }
    })();
  }, []);

  useEffect(() => {
    console.log("this", thePixelGame);
  }, [thePixelGame]);

  return (
    <div style={{
      display: "flex",
      gap: "3px"
    }}>
      {
        thePixelGame.map((item, index) =>
          <div key={index} style={{
            width: "20px",
            height: "20px",
            background: colorArray[item]
          }}></div>
        )
      }
    </div>
  );
}

export default App;
