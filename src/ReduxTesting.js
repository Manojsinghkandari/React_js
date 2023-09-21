import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrese,
  increse,
  increaseWithPaylod,
} from "./redux/features/counterSlice";

const ReduxTesting = () => {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);

  return (
    <div>
      <h1>ReduxTesting - {counterState.count} </h1>

      <button
        onClick={() => {
          dispatch(increse());
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(decrese());
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(increaseWithPaylod(parseInt(num)));
        }}
      >
        Increment With Paylod
      </button>

      <hr />

      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
    </div>
  );
};

export default ReduxTesting;
