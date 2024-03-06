import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen relative">
            {/* Fondo abstracto con efecto de desenfoque */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-20 filter blur-xl"></div>

            {/* Contenido del componente */}
            <div className="max-w-2xl mx-auto text-center relative z-10">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Get started with GlowUp today
                </h2>
                <p className="mt-3 text-gray-600">
                Hire experts for your next cleaning, to have the best results, remove complicated dirt and have a clean house on time.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Start cleaning
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA