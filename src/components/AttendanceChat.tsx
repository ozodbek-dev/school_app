"use client";
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Image from 'next/image';

const data = [
	{
		name: "Mon",
		present: 4000,
		absent: 2400,
	},
	{
		name: "Tue",
		present: 3000,
		absent: 1398,
	},
	{
		name: "Wed",
		present: 2000,
		absent: 9800,
	},
	{
		name: "Thu",
		present: 2780,
		absent: 3908,
	},
	{
		name: "Fri",
		present: 1890,
		absent: 4800,
	},
];


function AttendanceChat() {
  return (
		<div className='w-full h-full bg-white rounded-lg p-4'>
			<div className='flex justify-between items-center'>
				<h1 className='text-xl font-semibold '>Attendance</h1>
				<Image src='/moreDark.png' alt='moredark' width={20} height={20} />
			</div>
			<ResponsiveContainer width='100%' height='90%'>
				<BarChart width={500} height={300} data={data} barSize={20}>
					<CartesianGrid strokeDasharray='3 3' vertical={false} stroke="#ddd" />
          <XAxis dataKey='name' axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false} />
					<YAxis axisLine={false} />
					<Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightGray", boxShadow:"0 2px 5px rgba(0,0,0,0.3)"}} />
					<Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
					<Bar dataKey='present' fill='#fae27c' legendType='circle' radius={[10, 10, 0, 0]} />
					<Bar dataKey='absent' fill='#c3ebfa' legendType='circle' radius={[10, 10, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default AttendanceChat
