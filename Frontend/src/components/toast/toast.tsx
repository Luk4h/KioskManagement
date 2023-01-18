const ErrorToast = ({...props}: { message: string, isShowing: boolean}) => {
    return (
        <section id="Toast" className='absolute inset-0 flex justify-center h-fit w-full z-50'>
            <div className={'bg-red-500 h-fit p-4 mt-8 rounded-xl text-slate-200 font-bold font-mono drop-shadow absolute transition-all ' + ( props.isShowing ? 'top-0' : '-top-32')}>
                <div className='flex gap-8 items-center'>
                    <h3>{props.message}</h3>
                </div>
            </div>
        </section>
    )
}

export default ErrorToast