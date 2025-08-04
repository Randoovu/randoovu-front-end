import CreateForm from "@/app/components/Create/CreateForm";


export default function CreatePage() {
    return (
        <div className="min-h-screen md:py-8 w-full flex items-center justify-center">
            <form className="container max-md:mx-4 bg-white p-4 min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-100px)] py-8 rounded-lg shadow-md
            flex flex-col justify-between gap-8">
                <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-primary font-bold">Create Appointment Base</h1>
                        <p className="text-gray-700">
                            Create a new appointment base to manage your appointments effectively.
                        </p>
                    </div>
                </div>

                <CreateForm />
            </form>
        </div>
    );
}