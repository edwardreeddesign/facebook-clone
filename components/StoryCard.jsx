import Image from 'next/image';

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 hover:scale-105 transition duration-150 ">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
        alt="profile picture"
      />
      <Image
        src={src}
        alt="profile picture"
        layout="fill"
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl "
      />
      <h1 className="px-2 absolute bottom-2 text-lg  text-white text-center -translate-x-2 ">
        {name}
      </h1>
    </div>
  );
};
export default StoryCard;
