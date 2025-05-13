const VideoTitle = ({title,overview})=>{
    return (
        <div className="absolute w-screen aspect-video pt-[15%] px-24 text-white">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="w-64 py-2">{overview}</p>
            <div className="">
                <button className="w-32 py-2 bg-white rounded-lg text-black hover:bg-opacity-80 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"> <span className="float-start ml-2 text-md text-black">▶</span> Play</button>
                <button className="mx-4 w-32 py-2 bg-gray-500 rounded-lg hover:bg-opacity-80 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"><span className="float-start ml-2 text-md text-white">ⓘ</span> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;