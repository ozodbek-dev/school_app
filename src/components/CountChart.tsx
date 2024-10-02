'use client';
import Image from "next/image";
import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const data = [
	{
		name: "Total",
		count: 100,
		fill: "white",
	},
	{
		name: "Girls",
		count: 50,
		fill: "#fae27c",
	},
	{
		name: "Boys",
		count: 50,
		fill: "#c3ebfa",
	},
];

const style = {
	top: "50%",
	right: 0,
	transform: "translate(0, -50%)",
	lineHeight: "24px",
};

function CountChart() {
	const demoUrl = "https://codesandbox.io/p/sandbox/simple-radial-bar-chart-gnwjjg";
	return (
		<div className='bg-white rounded-xl  w-full h-full  p-4 '>
			{/* Title */}
			<div className='flex justify-between items-center '>
				<h1 className='text-lg font-semibold'>Students</h1>
				<Image className='cursor-pointer' src='/moreDark.png' width={20} height={20} alt='more-icon' />
			</div>
			{/* Chart */}
			<div className='w-full h-[75%] relative'>
				<ResponsiveContainer>
					<RadialBarChart cx='50%' cy='50%' innerRadius='40%' outerRadius='100%' barSize={32} data={data}>
						<RadialBar background dataKey='count' />
						{/* <Legend iconSize={10} layout='vertical' verticalAlign='middle' wrapperStyle={style} /> */}
					</RadialBarChart>
				</ResponsiveContainer>
				<Image
					className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '
					src='/maleFemale.png'
					alt='maleFemale'
					width={50}
					height={50}
				/>
			</div>
			{/* Bottom */}
			<div className='flex justify-center gap-16 '>
				<div className='flex flex-col  gap-1'>
					<div className='w-5 h-5 bg-sky rounded-full ' />
					<h1 className='font-bold '>1,234</h1>
					<h2 className='text-sm text-gray-300 '>Boys (55%)</h2>
				</div>
				<div className='flex flex-col  gap-1'>
					<div className='w-5 h-5 bg-Yellow rounded-full ' />
					<h1 className='font-bold '>1,234</h1>
					<h2 className='text-sm text-gray-300 '>Girls (55%)</h2>
				</div>
			</div>
		</div>
	);
}

export default CountChart;
