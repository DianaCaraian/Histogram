import React, {useState} from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { GradientTealBlue } from '@visx/gradient';
import { Typography } from "@mui/material";

const Histogram = ({postsNoPerMonth}) => {

    const data = postsNoPerMonth;
    const [monthHover, setMonthHover] = useState('')

    const x = d => d.month;
    const y = d => +d.postsNo * 100;

    const xMax = 400;
    const yMax = 350;

    const xScale = scaleBand({
        range: [0, xMax],
        round: true,
        domain: data.map(x),
        padding: 0.3,
    });
    const yScale = scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(y))],
    });

    return (
        <>
            <svg width={400} height={350}>
                <GradientTealBlue id="teal" />
                <Group>
                    {data.map((d) => {
                        const month = x(d);
                        const barWidth = xScale.bandwidth();
                        const barHeight = yMax - (yScale(y(d)) ?? 0);
                        const barX = xScale(month);
                        const barY = yMax - barHeight;
                        const text = `${d.month}: ${d.postsNo} posts`
                        return (
                            <Bar
                            cursor={'pointer'}
                            key={`bar-${month}`}
                            x={barX}
                            y={barY}
                            width={barWidth}
                            height={barHeight}
                            fill="rgba(23, 233, 217, .5)"
                            onClick={() => {
                               alert(text);
                            }}
                            onMouseEnter={() => {
                                setMonthHover(text);
                            }}
                        />
                        );
                    })}
                </Group>
            </svg>
            <Typography mt={2} color={'rgba(15, 92, 110)'}>{monthHover}</Typography>
        </>
    );
}

export default Histogram
