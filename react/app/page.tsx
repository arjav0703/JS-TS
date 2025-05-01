"use client";
import React from "react";
import { useState } from "react";

const Home = () => {
  const [marks, setMarks] = useState(0);
  return (
    <>
      <form>
        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.valueAsNumber)}
        />
      </form>
      <div>Marks: {marks}</div>
    </>
  );
};

export default Home;
