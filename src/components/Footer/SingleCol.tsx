const SingleCol = ({title, items}:any) => {
    return(
        <div>
            <h2 className="uppercase font-bold my-6">{title}</h2>
            <div className="flex flex-col capitalize gap-2">
                {
                    items.map((item:any, i:any) => (
                        <span key={i}>{item}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default SingleCol