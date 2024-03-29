import { useMouse } from '@uidotdev/usehooks';

const Card = ({ key, title, description, width }) => {
    const [mouse, ref] = useMouse();
    const xIntersecting = mouse.elementX > 0;
    const yIntersecting = mouse.elementY > 0;
    const isIntersecting = xIntersecting && yIntersecting;
    return (
        <div key={key} ref={ref} className={`border-0 px-4 pb-4 justify-center relative flex flex-col items-center  rounded-2xl shadow sm:flex-row md:max-w-xl  bg-[#000000] gap-3 overflow-hidden border-cyan-500 bg-transparent text-white `}>
            <div className={`h-14 w-14 rounded-full absolute bg-cyan-400 mix-blend-screen blur-xl top-1 right-1 opacity-0 transition-transform pointer-events-none ${isIntersecting ? 'scale-125 opacity-100' : ''}`}
                style={{
                    left: `${mouse.elementX}px`,
                    top: `${mouse.elementY}px`,
                }}>
            </div>
            <div className="flex flex-col items-center text-center md:text-left mt-2 gap-[10px] rounded-2xl">
                <h5 className="mb-1 text-xl xl:text-2xl font-medium justify-start text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;