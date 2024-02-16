const HomePageCard = ({ title, img, link }) => {
  return (
    <div className="h-[440px] bg-white z-30 m-3">
      <div className="text-lg xl:text-xl font-semibold ml-6 mt-4">{title}</div>
      <div className="h-[320px] m-6 ">
        <img
          className="h-[100%] w-[100%] object-cover"
          src={img}
        />
      </div>
      <div className="text-xs xl:text-sm text-blue-800 ml-4  cursor-pointer">{link}</div>
    </div>
  );
};

export default HomePageCard;
