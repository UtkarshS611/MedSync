import { RectangleEllipsis } from "lucide-react"


const Features = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-y-2">
            <div className="bg-blue-500 h-[45vh] w-[25vw] relative shadow-lg">
                <div>

                </div>
                <div className="bg-white w-full absolute bottom-0 h-[30%]">
                    <div>
                        <RectangleEllipsis />
                        <h1>
                            
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features