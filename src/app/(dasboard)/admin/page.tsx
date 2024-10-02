import AttendanceChat from "@/components/AttendanceChat";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

function Admin() {
	return (
		<div className='p-4 flex gap-4 flex-col md:flex-row'>
			{/* Left */}
			<div className='w-full lg:w-2/3 flex flex-col gap-8'>
				{/* User cards */}
				<div className='flex justify-between gap-4 flex-wrap'>
					<UserCard type='Student' />
					<UserCard type='Teacher' />
					<UserCard type='Parent' />
					<UserCard type='Staff ' />
				</div>
				{/* Middle charts */}
				<div className='flex gap-4 flex-col lg:flex-row'>
					{/* Count chart */}
					<div className='w-full lg:w-1/3 h-[450px]'>
						<CountChart />
					</div>
					{/* Attendance chart */}
					<div className='lg:w-2/3 h-[450px]'>
						<AttendanceChat />
					</div>
				</div>
				{/* Bottom charts */}
				<div className="w-full h-[500px]">
					<FinanceChart/>
				</div>
			</div>
			{/* Right */}
			<div className='w-full lg:w-1/3'>r</div>
		</div>
	);
}

export default Admin;
