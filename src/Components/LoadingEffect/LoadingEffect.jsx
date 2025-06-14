import Lottie from 'lottie-react';
import React from 'react';
import loading from '../../assets/Lotties/loading.json.json'

const LoadingEffect = () => {
    return (
        <div className='flex items-center justify-center'>
            <Lottie className='w-80' animationData={loading} loop={true}>
                
            </Lottie>
        </div>
    );
};

export default LoadingEffect;