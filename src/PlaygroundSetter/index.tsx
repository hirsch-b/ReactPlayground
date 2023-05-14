import React, { useState } from 'react';

export default function PlaygroundSetter() {
    const [checky, setChecky] = useState<boolean>(true);

    function ToggleChecky(event?: any) {
        console.log("event", event.target.value);
        setChecky(event?.target.checked || !checky);
        console.log("New state", checky);
    }

    return (
      <div className="container PlaygroundSetter">
        <h1>PlaygroundSetter</h1>

        <ul>
          <li>
            <input
              type="checkbox"
              name="checky"
              checked={checky}
              onChange={ToggleChecky}
            />{" "}
            <label onClick={ToggleChecky}>Checkme</label>
          </li>
        </ul>
      </div>
    );
}
