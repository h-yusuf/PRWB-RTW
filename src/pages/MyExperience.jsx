import React from "react";
import Navbar from "../components/partials/navbar";
import Sertif from "../components/project/Sertif";
const MyExperiece = () => {
    return(
        <>
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Navbar
            name="MyExperience"
            />
            <Sertif/>
        </div>
        </>
    )
}
export default MyExperiece;