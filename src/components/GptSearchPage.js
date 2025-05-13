import GptSearchBar from "./GptSearchBar";
import GptSearchResult from "./GptSearchResult";

const GptSearchPage = ()=>{
    return (
        <div className="">
            <div className="-z-20 absolute">
            <img className='fixed' src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg" alt="background-image"/>
            </div>
            <GptSearchBar/>
            <GptSearchResult/>
            </div>
    )
}

export default GptSearchPage;