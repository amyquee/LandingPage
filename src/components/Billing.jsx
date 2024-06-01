import { apple, bill, google } from "../../assets";
import styles, { layout } from "../style";

function Billing() {
  return (
      <div className={`flex ${layout.sectionReverse}`}>
        <div className={`${layout.sectionImgReverse} `}>
          <img src={bill} alt="" />
          <div
            className="absolute top-0 right-[80%]  pink__gradient
          z-[0] w-[40%] h-[35%]"
          ></div>
          <div
            className="absolute z-[1] w-[80%] right-[80%] 
        h-[80%] rounded-full bottom-40 white__gradient"
          ></div>
        </div>
        <div className={`${layout.sectionInfo} flex `}>
          <h2 className={` text-white ${styles.heading2} text-center`}>
            Easily control your <br className="sm:block hidden" /> billing &
            invoicing
          </h2>
          <p className={`mt-5 max-w-[470px]${styles.paragraph}`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
        <div className="flex flex-row w-[100%] justify-center flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
        </div>

      </div>
  );
}

export default Billing;
