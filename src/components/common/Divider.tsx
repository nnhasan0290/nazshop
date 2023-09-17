const Divider = ({children}:any) => {
    return(
        <div className="flex w-full my-2 justify-center items-center ">
            <hr className="border-t grow" />
            <span className={`text-xs ${children && "px-2"}`}>{children}</span>
            <hr className="border-t grow" />
        </div>
    )
}

export default Divider;