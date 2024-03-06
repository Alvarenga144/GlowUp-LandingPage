import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import cleanHands from "../../../public/icons/clean-hands-wash-soap-water-drop-svgrepo-com.svg"
import houseHold from "../../../public/icons/clean-household-housekeeping-towel-svgrepo-com.svg"
import toclean from "../../../public/icons/to-clean-svgrepo-com.svg"
import shower from "../../../public/icons/shower-svgrepo-com.svg"
import filter from "../../../public/icons/filter-svgrepo-com.svg"
import toilet from "../../../public/icons/toilet-bowl-svgrepo-com.svg"

const ToolKit = () => {

    const features = [
        {
            icon: cleanHands,
            title: "Item 1",
            desc: "texto de descripción correspondiente al item de que se esta resaltando"
        },
        {
            icon: houseHold,
            title: "Item 2",
            desc: "texto de descripción correspondiente al item de que se esta resaltando"
        },
        {
            icon: toclean,
            title: "Item 3",
            desc: "texto de descripción correspondiente al item de que se esta resaltando"
        },
        {
            icon: shower,
            title: "Item 4",
            desc: "texto de descripción correspondiente al item de que se esta resaltando"
        },
        {
            icon: filter,
            title: "Item 5",
            desc: "texto de descripción correspondiente al item de que se esta resaltando"
        },
        {
            icon: toilet,
            title: "Item 6",
            desc: "texto de descripción correspondiente al item de que se esta resaltando"
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Work with the best toolkit
                    </h2>
                    <p>
                        These are a few of our favourite things
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit