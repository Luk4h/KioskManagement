const Button = (props:{children: JSX.Element}) => {

    return(
        <button className= "w-36 text-slate-500 dark:text-slate-200 border dark:border-slate-700 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-500 transition">
            {props.children}
        </button>
    )
}

export default Button;