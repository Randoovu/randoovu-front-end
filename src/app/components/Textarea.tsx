export default function Textarea(props: any) {
    const { className, ...otherProps } = props;
    return <textarea {...otherProps} className={"w-full py-1.5 text-base rounded px-2 focus:outline-primary border border-gray-300 not-valid:outline-red-500 not-valid:border-red-500 " + {className}} />;
}