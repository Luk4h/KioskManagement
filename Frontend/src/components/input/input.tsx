import { ChangeEvent, Dispatch, HTMLInputTypeAttribute, useCallback } from "react";

const TextInput = (props:{id: string, type: HTMLInputTypeAttribute, placeholder: string, state: {value: any, setState: Dispatch<React.SetStateAction<any>>}}) => {
    
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        props.state.setState(e.target.value)
    }, [props.state.value])
    
    return (
        <label className='relative bg-slate-50 rounded-md h-10 flex items-center border border-slate-200 justify-between dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 font-semibold'>
        { ( props.type === 'time'|| !props.state.value ) && <span className='z-50 px-4 opacity-50'>{props.placeholder}</span> }
            <input id={props.id} type={props.type} onChange={handleChange} className={'px-4 bg-transparent h-full ' + ( props.type === 'time' ? 'pr-4' : 'w-full inset-0 absolute pl-4' )} value={props.state.value} ></input>
        </label>
    )
}

export default TextInput;