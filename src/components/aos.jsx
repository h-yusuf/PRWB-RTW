import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Aos() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Global settings go here (optional)
      once : true,
    });
  }, []);

  return (
    <div className="Aos">
      <div className='App-link'  data-aos="zoom-out-up" data-aos-duration="800" data-aos-easing="ease-out">
  This element will fade up when it enters the viewport.
</div>

    </div>
  );
}

export default Aos;
