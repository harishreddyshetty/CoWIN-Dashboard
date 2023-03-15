// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {data} = props

  return (
    <div className="vaccination-coverage-bg">
      <h1 className="chart-heading">Vaccination By Age</h1>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart className="chart">
          <Pie
            cx="50%"
            cy="40%"
            data={data}
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="44-60" fill=" #a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
