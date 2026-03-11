import React, { forwardRef } from 'react'
import AjkeKiKorbo from './projects/AjkeKiKorbo'
import ClothingStore from './projects/ClothingStore'
import TravelMedia from './projects/TravelMedia';
import TreasureKoii from './projects/TreasureKoii';
import ChaarChakka from './projects/ChaarChakka';
import Compiler from './projects/Compiler';
import ElectionNetraNews from './projects/ElectionNetraNews';

function Projects(props) {
    return (
        <div ref={props.projectsRef} className='m-5'>
            <p className='text-5 p-5 text-center'>Past Projects</p>
            <ElectionNetraNews />
            <Compiler />
            <ChaarChakka />
            <TreasureKoii />
            <ClothingStore />
            <TravelMedia />
            <AjkeKiKorbo />
        </div>
    )
}

export default forwardRef(Projects);
