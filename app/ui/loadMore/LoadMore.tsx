export default function LoadMore() {
    return (
        <div className="flex justify-center mt-6">
            <button type="button" className="truncate-button overflow-hidden whitespace-nowrap flex items-center bg-blue-500 hover:bg-blue-500/90 text-white text-sm py-2.5 px-4 rounded-lg">
                <span className="truncate">Mostrar mas contenido</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2  stroke-slate-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
    )
};
