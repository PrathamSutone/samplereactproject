import React from 'react';
import PickUp from '../PickUp/page';
import DropOff from '../DropOff/page';
import NavBar from '../NavBar/page';
import Ads1 from '../Ads/Ad1';
import Ads2 from '../Ads/Ad2';
import swap from './Swap.svg';

export default function Page() {
    return (
        <div>
            <NavBar/>
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <div className='w-1/2'>
                        <Ads1/>
                    </div>
                    
                    <Ads2/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <PickUp/>
                
                <DropOff/>
            </div>
        </div>
                
            
    );
}
