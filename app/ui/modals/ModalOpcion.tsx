import { useState } from "react";

export default function ModalImage() {

    const [selectedOption, setSelectedOption] = useState(0);

    const handleSubmit = () => {
        if (selectedOption) {
           
        }
    };

    const options = [
        { value: 1, option: "Este post contiene contenido robado" },
        { value: 2, option: "Material sobre abuso sexual infantil" },
        { value: 3, option: "Estafa o fraude" },
        { value: 4, option: "Este post es spam" }
    ]

    return (
        <div aria-hidden="true" className="hidden sm:fixed top-0 left-0 w-full h-full  justify-center items-center bg-gray-800 bg-opacity-75 z-50">

            <div className="relative p-4 w-full max-w-md max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between px-4 py-2 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                            Reportar Publicacion
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="px-4 py-2 space-y-4">
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">¿Por qué quieres reportar esta publicación?</p>

                        <ul className="space-y-3">
                            {options.map((option, index) => (
                                <li key={index}>
                                    <button type="button" onClick={() => setSelectedOption(option.value)} className={`${selectedOption === option.value ? 'text-red' : 'bg-black/60 hover:bg-white'} p-2 text-sm w-full text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500 `}>
                                        {option.option}
                                    </button>
                                </li>

                            ))}
                        </ul>

                        <button type="button" onClick={handleSubmit} className={`${selectedOption === 0 ? 'cursor-none' : 'bg-black/60 text- hover:bg-white'} text-red-200  inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                            Enviar reporte
                        </button>

                        <div>
                            <p className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[16px] h-[16px] mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                                Gracias por tu reporte, revisaremos la publicación.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};