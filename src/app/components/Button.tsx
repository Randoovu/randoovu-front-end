export default function Button({ type, children, className, key }: { type?: string; children: any; className?: string; key?: any; }) {
    if (type) {
        if (type === "inline") {
            return (
                <button key={key} className={"border-primary font-medium rounded-xl p-2 text-primary border-2 hover:bg-primary hover:text-background focus:bg-primary focus:text-background cursor-pointer focus:shadow-lg duration-150 focus:outline " + className}>{children}</button>
            )
        }
        // ...
    }
    else {
        return (
            <button key={key} className={"bg-primary font-medium rounded-xl p-2 text-background cursor-pointer focus:shadow-lg duration-150 focus:outline " + className}>{children}</button>
        )
    }
}