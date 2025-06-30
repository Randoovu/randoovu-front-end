import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";

export default function ContactUs() {
    return (
        <div className="w-full items-start flex flex-col gap-6 justify-between" id="contact-us">
            <div className="flex flex-col gap-4 w-full">
                <h2 className="text-xl md:text-2xl font-medium">Contact Us</h2>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-base font-medium">Name</label>
                <Input maxLength={30} minLength={3} type="text" id="name" />
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="message" className="text-base font-medium">Message</label>
                <Textarea maxLength={500} minLength={5} style={{height: "300", maxHeight: "300px"}} id="message" />
            </div>
            </div>

            <Button className="w-full">Send</Button>
        </div>
    )
}