import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        // presetColors={[
        //   "#FF5733",
        //   "#3498DB",
        //   "#2ECC71",
        //   "#F1C40F",
        //   "#9B59B6",
        //   "#E74C3C",
        //   "#1ABC9C",
        //   "#F39C12",
        //   "#34495E",
        //   "#27AE60",
        // ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
