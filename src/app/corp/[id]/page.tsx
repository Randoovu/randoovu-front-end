import CreateAppointmentModal from "@/app/components/Corp/CreateAppointmentModal";

export default async function CorpPage({ params }: { params: { id: string } }) {
  const corp = {
    title: "Tom's Diner",
    id: params.id,
    description: "A cozy diner serving classic American breakfast and lunch.",
    todaysAppointmentCount: 50,
    currentAppointmentCount: 5,
    maxAppointmentCapacity: 21,
    peopleOnQueue: [
      {
        name: "John Doe",
        status: "Inside",
        appointmentTime: new Date().toISOString(),
      },
      {
        name: "Jane Smith",
        status: "Waiting",
        appointmentTime: new Date().toISOString(),
      },
      {
        name: "John Silverhand",
        status: "Waiting",
        appointmentTime: new Date().toISOString(),
      },
      {
        name: "Jack Cooper",
        status: "Waiting",
        appointmentTime: new Date().toISOString(),
      },
    ],
  };

  return (
    <div className="container max-md:px-4 h-screen py-8 flex flex-col gap-8">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl text-primary font-bold">{corp.title}</h1>
          <p className="text-gray-700 text-sm">
            Corp ID: <span className="font-medium">{corp.id}</span>
          </p>

          <div className="flex flex-col mt-2">
            <p className="text-sm text-gray-500">
              Fullness Percent:{" "}
              {Math.round(
                (corp.currentAppointmentCount * 100) /
                  corp.maxAppointmentCapacity
              )}
              %
            </p>
            <p className="text-sm text-gray-500">
              Today's Appointments: {corp.todaysAppointmentCount}
            </p>
            <p className="text-sm text-gray-500">
              Current Appointments: {corp.currentAppointmentCount}
            </p>
            <p className="text-sm text-gray-500">
              Max Appointment Capacity: {corp.maxAppointmentCapacity}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <div className="flex flex-wrap gap-3">
          {corp.peopleOnQueue.map((person, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md max-md:w-full">
              <h2 className="text-lg font-semibold">{person.name}</h2>
              <p className="text-gray-600 text-sm">{person.status}</p>
              <p className="text-gray-500 text-xs">
                Appointment Time:{" "}
                {new Date(person.appointmentTime).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <CreateAppointmentModal />
      </div>
    </div>
  );
}
