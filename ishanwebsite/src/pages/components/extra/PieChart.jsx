import React, { useState } from "react";

const PieChart = ({ data }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const centerX = 50;
  const centerY = 50;
  let startAngle = 0;

  const [hoveredSlice, setHoveredSlice] = useState(null);

  const handleSliceHover = (index) => {
    setHoveredSlice(index);
  };

  const handleSliceLeave = () => {
    setHoveredSlice(null);
  };

  return (
    <div className="pie-chart-container">
      <svg className="pie-chart-svg" viewBox="0 0 100 100">
        {data.map((item, index) => {
          const percentage =
            (item.value / data.reduce((sum, d) => sum + d.value, 0)) * 100;
          const endAngle = startAngle + (percentage / 100) * 360;
          const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
          const startAngleRadians = (startAngle * Math.PI) / 180;
          const endAngleRadians = (endAngle * Math.PI) / 180;
          const startX = centerX + radius * Math.cos(startAngleRadians);
          const startY = centerY + radius * Math.sin(startAngleRadians);
          const endX = centerX + radius * Math.cos(endAngleRadians);
          const endY = centerY + radius * Math.sin(endAngleRadians);

          const pathData = [
            `M ${startX} ${startY}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
            `L ${centerX} ${centerY}`,
            "Z",
          ].join(" ");

          startAngle = endAngle;

          return (
            <g
              key={item.label}
              className={`pie-slice ${
                hoveredSlice === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleSliceHover(index)}
              onMouseLeave={handleSliceLeave}
            >
              <path
                d={pathData}
                fill={item.color}
                stroke="#fff"
                strokeWidth={0.1}
                style={{
                  transition: "fill 0.3s ease-in-out",
                }}
              />
            </g>
          );
        })}
        {hoveredSlice !== null && (
          <g>
            <text
              x={centerX}
              y={centerY}
              dominantBaseline="middle"
              textAnchor="middle"
              className="slice-label"
            >
              {data[hoveredSlice].label}
            </text>
          </g>
        )}
      </svg>
      {hoveredSlice !== null && (
        <div className="info-box">
          <div className="info-content">
            <div className="language h5">{data[hoveredSlice].label}</div>
            <div className="num-projects">
              Number of Projects: {data[hoveredSlice].value}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PieChart;
