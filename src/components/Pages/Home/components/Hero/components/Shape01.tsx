const Shape01 = (props: React.HTMLAttributes<SVGElement>) => {
    return <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" {...props}>
        <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stopColor="rgba(41, 128, 185, 1)" offset="0%"></stop>
                <stop id="stop2" stopColor="rgba(46, 204, 113, 1)" offset="100%"></stop>
            </linearGradient>
        </defs>
        <path fill="url(#sw-gradient)" d="M18.1,-25.1C21,-19.1,19.4,-11.1,18.4,-5C17.4,1.1,17.1,5.4,15.7,10.3C14.4,15.2,11.9,20.7,7.6,23.4C3.2,26.1,-3.1,26,-11.2,25.4C-19.2,24.7,-29,23.6,-34.7,17.9C-40.4,12.3,-42.1,2.3,-38.8,-5.1C-35.5,-12.6,-27.1,-17.4,-19.8,-22.7C-12.5,-28,-6.2,-33.8,0.7,-34.6C7.6,-35.4,15.1,-31.2,18.1,-25.1Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" stroke="url(#sw-gradient)"></path>
    </svg>;
};

export default Shape01;