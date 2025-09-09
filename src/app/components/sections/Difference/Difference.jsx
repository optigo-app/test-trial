import React from 'react'
import './Difference.scss'

const TheDifference = ({ theme, pageType }) => {

    return (
        <div className="smilingPAgeMain" style={{ paddingBlock: '5%' }}>
            <p
                className="smilingTitle"
            >
                The Sonasons Difference
            </p>

            <div className="smr_smilingRock">
                {/* First Image */}
                <div
                    className="smr_smilingRockBox"
                >
                    <div className="smr_diffrence_box1_main">
                        <img
                            className="smr_deffrence_img"
                            src={`/TheDifference1.webp`}
                            alt="Natural Diamond & jewellery"
                        />
                    </div>
                    <div className="smr_diffrence_box2_main">
                        <p className="smr_smilingBoxName">Natural Diamond & jewellery</p>
                    </div>
                </div>

                {/* Second Image */}
                <div
                    className="smr_smilingRockBox"
                >
                    <div className="smr_diffrence_box1_main">
                        <img
                            className="smr_deffrence_img"
                            src={`/TheDifference2.webp`}
                            alt="1% of each purchase goes to your choice of charity"
                        />
                    </div>
                    <div className="smr_diffrence_box2_main">
                        <p className="smr_smilingBoxName">
                            1% of each purchase goes to your choice of charity
                        </p>
                    </div>
                </div>

                {/* Third Image */}
                <div
                    className="smr_smilingRockBox"
                >
                    <div className="smr_diffrence_box1_main">
                        <img
                            className="smr_deffrence_img"
                            src={`/TheDifference3.webp`}
                            alt="Laser inscribed diamonds with Sonasons logo"
                        />
                    </div>
                    <div className="smr_diffrence_box2_main">
                        <p className="smr_smilingBoxName">Laser inscribed diamonds with Sonasons logo</p>
                    </div>
                </div>

                {/* Fourth Image */}
                <div
                    className="smr_smilingRockBox"
                >
                    <div className="smr_diffrence_box1_main">
                        <img
                            className="smr_deffrence_img"
                            src={`/TheDifference4.webp`}
                            alt="ECG+ Certified Brand Butterfly Mark"
                        />
                    </div>
                    <div className="smr_diffrence_box2_main">
                        <p className="smr_smilingBoxName">ECG+ Certified Brand Butterfly Mark</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheDifference;
