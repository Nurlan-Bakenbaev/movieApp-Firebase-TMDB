import React from 'react'

const SavedShows = () => {
  return (
    <>
 <div
      key={item.id}
      className="relative p-2 inline-block  w-[160px] sm:w-[200px] md:w-[240px] cursor-pointer"
    >
      <img
        className="w-full h-full block "
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 overlay">
        <p className="text-white font-bold md:text-sm text-xs flex justify-center items-center h-full  text-center ">
          {item?.title}
        </p>
        <p onClick={saveMovie} className="text-gray-300 absolute top-4 left-4 ">
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </p>
      </div>
    </div>
    </>
  )
}

export default SavedShows