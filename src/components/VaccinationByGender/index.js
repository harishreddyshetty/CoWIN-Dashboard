// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

// const data = [
//   {
//     count: 809680,
//     language: 'Telugu',
//   },
//   {
//     count: 4555697,
//     language: 'Hindi',
//   },
//   {
//     count: 12345657,
//     language: 'English',
//   },
// ]

const VaccinationByGender = props => {
  const {data} = props
  //   const {count, gender} = data

  return (
    <div className="vaccination-coverage-bg">
      <h1 className="chart-heading">Vaccination By Gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill=" #5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
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
export default VaccinationByGender
