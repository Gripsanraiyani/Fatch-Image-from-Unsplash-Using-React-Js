import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const [results, setResultes] = useState([]);

  const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=YT2_zzGzGWdTDtjbHVC-T5qaykvDwj20cbmTIleSWr0&query=${value}&orientation=squarish`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setResultes(data.results)
      })
  }

  return (
    <>
      <div className="App">
        <div className="myDiv">
          <span>Search</span>
          <input
            style={{ width: "60%" }}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => fetchImage()}>Send</button>
        </div>

        <div className="gallery">
          {
            results.map((item) => {
              return <img className="item" key={item.id} src={item.urls.regular} alt="Image" />
            })
          }
        </div>

      </div>

    </>
  );
}

export default App;
