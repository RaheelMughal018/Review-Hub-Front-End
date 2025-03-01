import React from 'react';
import { StarsCanvas } from './canvas';
import Word from './word';

function Wordcomp() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PieChart width={600} height={600}>
          <Pie data={preparePieChartData()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={200} label />
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
  );
}

export default Wordcomp;
