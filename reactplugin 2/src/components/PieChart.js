import React from "react";
import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { LinearGradient } from "@visx/gradient";
import { LegendLabel, LegendItem } from "@visx/legend";
import styled from "styled-components";
/* CSS for the legend-component */

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`;

const StyledLegend = styled.div`
  display: table;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  width: 300px;
  height: 162px;
  font-size: 11px;
`;

const StyledHeader = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin: 25px;
  white-space: nowrap;
`;

const PieChart = ({ data, title }) => {
  /* Determines the type of data to be shown in the graph */

  /* A state keeping track of the currently highlighted arc in the chart */

  const [active, setActive] = useState();

  /* The size of the svg */

  const svgSize = 300;

  /* The size of the chart */

  const width = 200;
  const half = width / 2;

  /* The component which renders the legend based on the data from the API. */

  const renderLegend = () => {
    const size = 10;

    return data.map((dp) => {
      return (
        <LegendItem
          key={dp.type}
          margin={10}
          onMouseEnter={() => setActive(dp)}
          onMouseLeave={() => setActive(null)}
        >
          <svg width={size} height={size} style={{ margin: "5px 0" }}>
            <circle fill={dp.color} r={size / 2} cx={size / 2} cy={size / 2} />
          </svg>
          <LegendLabel style={{ cursor: "pointer", margin: "0 0 0 4px" }}>
            {`${dp.type}: ${dp.amount} KG CO₂e`}
          </LegendLabel>
        </LegendItem>
      );
    });
  };

  /* Renders the Piechart based on the data from the API */

  return (
    <StyledDiv>
      <StyledHeader>{title}</StyledHeader>
      <main>
        <svg width={svgSize} height={svgSize}>
          {/* Creates a color-fade for each individual item */}

          {data.map((dp) => {
            return (
              <LinearGradient
                key={dp.type}
                id={dp.type}
                from={dp.color}
                to="lightgray"
              />
            );
          })}

          {/* The piechart is rendered with the predefined size */}

          <Group top={svgSize / 2} left={svgSize / 2}>
            <Pie
              data={data}
              pieValue={(data) => data.amount}
              outerRadius={half}
              innerRadius={({ data }) => {
                const size = active && active.type === data.type ? 40 : 30;
                return half - size;
              }}
              padAngle={0.01}
            >
              {/* Every arc in the chart is assigned a listener for MouseEvents  */}
              {/* When the arc is entered it will be highlighted */}

              {(pie) => {
                return pie.arcs.map((arc) => {
                  return (
                    <g
                      key={arc.data.type}
                      cursor="pointer"
                      onMouseEnter={() => setActive(arc.data)}
                      onMouseLeave={() => setActive(null)}
                    >
                      <path
                        d={pie.path(arc)}
                        fill={`url(#${arc.data.type})`}
                      ></path>
                    </g>
                  );
                });
              }}
            </Pie>

            {/* If the arc is selected its values will be highlighted */}

            {active ? (
              <>
                <Text
                  textAnchor="middle"
                  fontFamily="Quicksand-Regular"
                  opacity={0.7}
                  fontSize={20}
                  dy={-10}
                >
                  {active.amount}
                </Text>
                <Text
                  textAnchor="middle"
                  fontFamily="Quicksand-Regular"
                  opacity={0.5}
                  fontSize={10}
                  dy={10}
                >
                  {active.type}
                </Text>
              </>
            ) : (
              /*Else the total CO2 emmision will be displayed*/

              <>
                <Text
                  textAnchor="middle"
                  fontFamily="Quicksand-Regular"
                  opacity={0.7}
                  fontSize={20}
                  dy={-10}
                >
                  {data.reduce((acc, type) => acc + type.amount, 0).toFixed(2)}
                </Text>
                <Text
                  textAnchor="middle"
                  fontFamily="Quicksand-Regular"
                  opacity={0.5}
                  fontSize={10}
                  dy={10}
                >
                  TOTAL KG CO₂e
                </Text>
              </>
            )}
          </Group>
        </svg>
      </main>

      {/* Here the legend is rendered */}

      <StyledLegend>{renderLegend()}</StyledLegend>
    </StyledDiv>
  );
};

export default PieChart;
