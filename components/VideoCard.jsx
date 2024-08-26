'use client'
export const VideoCard = ({ video }) => {
  // Check if video is an object
  if (typeof video === 'object') {
    console.log('video is an object:', video)
    return (
      <div className="w-full overflow-hidden rounded-lg shadow-2xl cursor-pointer relative pt-[56.25%] h-80">
        <iframe
          className="w-full h-full absolute top-0 right-0 left-0 bottom-0"
          src={video.src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    )
  }
  // Check if video is a string
  else if (typeof video === 'string') {
    console.log('video is a string:', video)
    return (
      <div className="w-full overflow-hidden rounded-lg shadow-2xl cursor-pointer relative pt-[56.25%] h-80">
        <video className="w-full h-full absolute inset-0 object-cover" controls>
          <source src={video} type="video/mp4" lazy />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  } else {
    console.log('video is of an unknown type:', typeof video)
    return null
  }
}
