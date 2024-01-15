import Cart from "../partials/Cart";
import srtf1 from "../../assets/exp/cyber.jpg"
import srtf2 from "../../assets/exp/uiux.jpg"
import srtf3 from "../../assets/exp/uiux1.jpg"
import srtf4 from "../../assets/exp/wordpress.jpg"
import srtf5 from "../../assets/exp/desain.jpg"
import srtf6 from "../../assets/exp/enterprainer.jpg"


import img2 from "../../assets/exp/f8.jpg"
import img3 from "../../assets/exp/f3.JPG"
import img4 from "../../assets/exp/f5.jpg"
import img5 from "../../assets/exp/f2.jpg"
import img6 from "../../assets/exp/f7.JPG"
import img7 from "../../assets/exp/f4.jpg"


const Sertif = () => {
    return (
        <>
            <div className="container mx-auto grid gap-12 mb-24">
                {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> */}
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-1/2 p-1 md:p-2 group relative">
                            {/* <div className="group-hover:bg-black/70 w-full h-full block absolute rounded-lg object-cover object-center z-40 transition-all duration-300"></div> */}
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center hover:opacity-100 opacity-60 transition-all duration-500"
                                src={img2} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center hover:opacity-100 opacity-60 transition-all duration-500"
                                src={img3} />
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center hover:opacity-100 opacity-60 transition-all duration-500"
                                src={img6} />
                        </div>
                    </div>
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center hover:opacity-100 opacity-60 transition-all duration-500"
                                src={img4} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center hover:opacity-100 opacity-60 transition-all duration-500"
                                src={img5} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center hover:opacity-100 opacity-60 transition-all duration-500"
                                src={img7} />
                        </div>
                    </div>
                </div>

                <span>
                    <a className="text-gradient btn-link text-2xl">Sertification</a>
                </span>
                <div className="flex-1 gap-8 mt-2 flex flex-col lg:flex-row">

                    <Cart
                        img={srtf3}
                        title="Amicta AMIKOM Competition"
                        name="Amikom University of yogyakarta"
                        head="UIUX Amicta Competition"
                        motion="0.3"
                        link="https://drive.google.com/file/d/1MmoYZNEQpCX5SiwomT_XPvsmwytpouDZ/view?usp=drive_link"
                    />
                    <Cart
                        img={srtf6}
                        title="entrepreneurship"
                        name="Dinas UMKM Yogyakarta"
                        head="Entrepreneurship brainstorming"
                        motion="0.4"
                        link="https://drive.google.com/file/d/1OTXidGAvRfD_uw86jpi_DxGB-DidnEfw/view?usp=drive_link"
                    />

                    <Cart
                        img={srtf5}
                        title="Grapict Desain"
                        name="PEMDA DIY"
                        head="Design and operate printing tools"
                        motion="0.5"
                        link="https://drive.google.com/file/d/1OJpYAkix_n51-Rn06xzikswCgjAVXW_v/view?usp=sharing"
                    />
                </div>
                <div className="flex-1 gap-8 mt-2 flex flex-col lg:flex-row">
                    <Cart
                        img={srtf4}
                        title="Operating wordpres"
                        name="Neuversity"
                        head="Build a website without any code"
                        motion="0.3"
                        link="https://drive.google.com/file/d/11SGbe4ETWPaXBpqpiuzIBTrLotbX-rgz/view?usp=drive_link"
                    />
                    <Cart
                        img={srtf2}
                        title="Student portal aplication"
                        name="IFEST UAJY"
                        head="Mobile UIUX Competition(MUC)"
                        motion="0.4"
                        link="https://drive.google.com/file/d/19EyyqHa5euA6VljT1e5R1u9ACKndSsUy/view?usp=sharing"
                    />
                    <Cart
                        img={srtf1}
                        title="Ethical Hacking"
                        name="linux hacking.id"
                        head="Practical IT Scurity Fundamental"
                        motion="0.3"
                        link="https://drive.google.com/file/d/16w1HcUsD36kkZfkQEZYSbzgskRvB0EYM/view?usp=drive_link"
                    />
                </div>
            </div>
        </>
    )
}
export default Sertif;