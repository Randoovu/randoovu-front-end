import Link from "next/link";
import Button from "../components/Button";
import DropdownPart from "../components/Dashboard/DropdownPart";

export default function DashboardPage() {

    const account = {
        email: "benningtonchester@legend.com",
        id: "1234567890",
    }
    const corps = [{
        title: "Tom's Diner",
        id: "fd8QWSDxix2",
        description: "A cozy diner serving classic American breakfast and lunch.",
        todaysAppointmentCount: 50,
        currentAppointmentCount: 5,
        maxAppointmentCapacity: 21
    },
    {
        title: "Final Masquerade Restaurant",
        id: "DhE8QWAXsiR1",
        description: "Standing at the end of the final masquerade.",
        todaysAppointmentCount: 200,
        currentAppointmentCount: 25,
        maxAppointmentCapacity: 52
    }]
    return (
        <div className="container max-md:px-4 min-h-screen py-8 flex flex-col gap-8">
            <div className="flex w-full items-center justify-between gap-4">
                <div className="flex flex-col">
                    <h1 className="text-2xl text-primary font-bold">Randoovu Dashboard</h1>

                    <p className="text-gray-700">
                        Welcome to the Randoovu dashboard! Here you can manage your appointment bases and view statistics.
                    </p>
                </div>

                <DropdownPart account={account} />
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">My Appointment Bases</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {corps.map((corp) => (
                        <div key={corp.id} className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">{corp.title}</h2>
                            <p className="text-gray-600 text-base h-12">{corp.description}</p>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">Fullness Percent: {Math.round(corp.currentAppointmentCount * 100 / corp.maxAppointmentCapacity)}%</p>
                                <p className="text-sm text-gray-500">Today's Appointments: {corp.todaysAppointmentCount}</p>
                                <p className="text-sm text-gray-500">Current Appointments: {corp.currentAppointmentCount}</p>
                                <p className="text-sm text-gray-500">Max Appointment Capacity: {corp.maxAppointmentCapacity}</p>
                            </div>

                            <div className="mt-4">
                                <Link href={`/corp/${corp.id}`} className="text-blue-500 hover:underline hover:bg-primary/5 rounded-lg duration-150 px-1 py-2">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">Create A New Appointment Base</h1>
                <Link href="/dashboard/create"><Button className="w-24">Create</Button></Link>
            </div>
        </div>
    );
}