import NavLink from "../NavLink"

const Hero = () => (
    <div className="custom-screen relative">
        {/* Fondo abstracto con efecto de desenfoque */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-red-400 opacity-20 filter blur-xl"></div>

        <section>
            <div className="custom-screen py-28 text-gray-600">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                        Shine On, Shine Through, <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#00a3c0] to-[#06b6d4]">GlowUp</span> Cleans for You
                    </h1>
                    <p className="max-w-xl mx-auto">
                        Elevate your space with our meticulous cleaning services. Experience the radiance of a spotless home, restaurant, or business.
                    </p>
                    <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                        <NavLink
                            href="/get-started"
                            className="text-white bg-cyan-500 hover:bg-gray-600 active:bg-cyan-900"
                        >
                            Contact us
                        </NavLink>
                        <NavLink
                            href="#cta"
                            className="text-gray-700 border hover:bg-gray-50"
                            scroll={false}
                        >
                            Learn more
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default Hero