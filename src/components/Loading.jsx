// eslint-disable-next-line react/prop-types
export function Loading ({ message }){
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4"></div>
                <div className="text-sm">{message}</div>
            </div>
        </div>
    );
};