import React from 'react';

export const TechStackSection = () => {
  return (
    <>
    <div className='hidden lg:block mt-10'>
      <div className='flex flex-row gap-20 justify-center'>
        <img src="/techStack/react.png" alt="" className='h-20 mt-8' />
        <img src="/techStack/tailwind.png" alt="" className='h-[160px]' />
        <img src="/techStack/node.png" alt="" className='h-[160px]' />
      </div>
      <div className='flex flex-row gap-20 justify-center mt-8'>
        <img src="/techStack/express.png" alt="" className='h-[160px]' />
        <img src="/techStack/mongodb.png" alt="" className='h-[100px] mt-8' />
        <div className='h-20 w-60 bg-blue-900 border-2 border-black rounded-lg flex justify-center items-center mt-10'>
          <span className='text-white text-2xl'>Face-api.js</span>
        </div>
      </div>
    </div>

    <div className='hidden lg:hidden md:block mt-10'>
      <div className='flex flex-row gap-20 justify-center'>
        <img src="/techStack/react.png" alt="" className='h-20 mt-8' />
        <img src="/techStack/tailwind.png" alt="" className='h-[160px]' />
      </div>
      <div className='flex flex-row gap-20 justify-center'>
        <img src="/techStack/node.png" alt="" className='h-[160px]' />
        <img src="/techStack/express.png" alt="" className='h-[160px]' />
      </div>
      <div className='flex flex-row gap-20 justify-center mt-8'>
        <img src="/techStack/mongodb.png" alt="" className='h-[100px] mt-8' />
        <div className='h-20 w-60 bg-blue-900 border-2 border-black rounded-lg flex justify-center items-center mt-10'>
          <span className='text-white text-2xl'>Face-api.js</span>
        </div>
      </div>
    </div>
    <div className='flex flex-col sm:flex sm:items-center md:hidden mt-10 gap-y-10 mx-auto justify-center w-full max-w-screen-lg'>
    <img src="/techStack/react.png" alt="" className='mx-auto mt-8 h-[80px] w-[250px]' />
    <img src="/techStack/tailwind.png" alt="" className='mx-auto h-[140px] w-[250px]' />
    <img src="/techStack/node.png" alt="" className='mx-auto h-[140px] w-[250px]' />
    <img src="/techStack/express.png" alt="" className='mx-auto h-[140px] w-[250px]' />
    <img src="/techStack/mongodb.png" alt="" className='mx-auto h-[120px] w-[200px]' />
    <div className='h-20 w-60 mx-auto bg-blue-900 border-2 border-black rounded-lg flex justify-center items-center mt-10 mb-10'>
        <span className='text-white text-2xl'>Face-api.js</span>
    </div>
</div>




    </>
    
  );
};
