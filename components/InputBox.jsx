import { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Image from 'next/image';

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const [input, setInput] = useState('');

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4-items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          alt={session.user.name}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            type="text"
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            placeholder={`What's on your mind ${session.user.name}?`}
            value={input}
            ref={inputRef}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit" hidden>
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-around p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};
export default InputBox;
