export default function Button(props: any) {
    // I know this component can be written without if statements and it can be written in one return.
    // But I wanted to write it like this for readability.

    const { type, children, className, ...otherProps } = props;
    if (type) {
        if (type === "outline") {
            return (
                <button {...otherProps} className={"disabled:opacity-30 disabled:cursor-not-allowed border-primary font-medium rounded-xl p-2 text-primary border-2 hover:bg-primary hover:text-background focus:bg-primary focus:text-background cursor-pointer focus:shadow-lg duration-150 focus:outline " + className}>{children}</button>
            )
        }
        // ...
    }
    else {
        return (
            <button {...otherProps} className={"disabled:opacity-30 disabled:cursor-not-allowed bg-primary font-medium rounded-xl p-2 text-background cursor-pointer focus:shadow-lg duration-150 focus:outline " + className}>{children}</button>
        )
    }
}