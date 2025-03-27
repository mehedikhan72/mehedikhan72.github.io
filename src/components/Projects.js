import React, { forwardRef } from 'react'
import AjkeKiKorbo from './projects/AjkeKiKorbo'
import ClothingStore from './projects/ClothingStore'
import TravelMedia from './projects/TravelMedia';
import TreasureKoii from './projects/TreasureKoii';
import ChaarChakka from './projects/ChaarChakka';

function Projects(props) {
    return (
        <div ref={props.projectsRef} className='m-5'>
            <p className='text-5 p-5 text-center'>Past Projects</p>
            <p className='text-4 p-5'>Full Stack Web Applications</p>
            <ChaarChakka />
            <TreasureKoii />
            <ClothingStore />
            <TravelMedia />
            <AjkeKiKorbo />
        </div>
    )
}

export default forwardRef(Projects);
