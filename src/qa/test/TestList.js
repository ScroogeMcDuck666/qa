import React from "react";
import TestItem from "./TestItem";

const TestList = (props) => {
  return (
    <div>
        {props.testList.map((test) => {
          return <TestItem test={test} />;
        })}
    </div>
  );
};

export default TestList;
