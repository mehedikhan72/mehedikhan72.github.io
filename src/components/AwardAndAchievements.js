import React, { forwardRef } from 'react'
import IeeeVipCup2025 from './awards-achievements/IeeeVipCup2025';
import Poridhi2025 from './awards-achievements/Poridhi2025';
import Therap2024 from './awards-achievements/Therap2024';

function AwardsAndAchievements(props) {
    return (
        <div ref={props.awardsRef} className='m-5'>
            <p className='text-5 p-5 text-center'>Awards & Achievements</p>
            <IeeeVipCup2025 />
            <Poridhi2025 />
            <Therap2024 />
        </div>
    )
}

export default forwardRef(AwardsAndAchievements);
