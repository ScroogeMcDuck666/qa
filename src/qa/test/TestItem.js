import React from "react";
import { Card } from "antd";
import "./TestItem.css";

const TestItem = ({ test, key }) => {
  return (
    <div className="site-card-border-less-wrapper">
        <Card title={test.name} bordered={false} style={{ width: 300 }}>
          <p>{test.description}</p>
        </Card>
    </div>
  );
};

export default TestItem;
