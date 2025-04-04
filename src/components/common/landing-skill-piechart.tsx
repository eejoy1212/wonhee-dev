import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'TypeScript', value: 80 },
  { name: 'React', value: 20 },
//   { name: 'Next.js', value: 20 },
//   { name: 'Tailwind CSS', value: 15 },
//   { name: 'Firebase', value: 10 },
];

const COLORS = ['#FF8042', "#ffffff"
    // '#FFBB28', '#00C49F', '#0088FE', '#AA46BE'
];
interface LandingPieChartProps {
    skillName: string;
    skillValue: number;
    skillColor?: string;
    }
export default function LandingPieChart({skillName, skillValue,skillColor}: LandingPieChartProps) {
    const COLORS = [skillColor, "#ffffff"
        // '#FFBB28', '#00C49F', '#0088FE', '#AA46BE'
    ];
  return (
    <div className="w-full max-w-md h-[300px] mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
        <Pie
  data={[
    { name: skillName, value: skillValue },
    { name: "empty", value: 100 - skillValue }
  ]}
  dataKey="value"
  nameKey="name"
  outerRadius={100}
  innerRadius={50}
  label={({ name, cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 10;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (name === "empty") return null;

    return (
      <g transform={`translate(${x}, ${y})`} className="text-[12px] fill-black text-center">
        <image href="/react.png" x={-12} y={-24} width={24} height={24} />
        <text x={0} y={8} textAnchor="middle" className={`text-[16px] font-bold text-[${skillColor}]`}>
          {`${name} (${Math.round(percent * 100)}%)`}
        </text>
      </g>
    );
  }}
  labelLine={false}
>
{data.map((_, index) => (
    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  ))}
</Pie>

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
