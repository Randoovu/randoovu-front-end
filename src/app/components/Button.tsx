export default function Button(props: any) {
    const { type, children, className, key, ...otherProps } = props;
    if (type) {
        if (type === "outline") {
            return (
                <button {...otherProps} key={key} className={"border-primary font-medium rounded-xl p-2 text-primary border-2 hover:bg-primary hover:text-background focus:bg-primary focus:text-background cursor-pointer focus:shadow-lg duration-150 focus:outline " + className}>{children}</button>
            )
        }
        // ...
    }
    else {
        return (
            <button {...otherProps} key={key} className={"bg-primary font-medium rounded-xl p-2 text-background cursor-pointer focus:shadow-lg duration-150 focus:outline " + className}>{children}</button>
        )
    }
}