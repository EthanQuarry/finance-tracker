

export default function InputTitle({children}: { children: React.ReactNode}) {
    return (
        <label className="font-medium flex h-10 bg-background px-3 py-2  text-md ml-4  " >
            {children}
        </label>
    )
}