const Shape02 = (props: React.HTMLAttributes<SVGElement>) => {
    return <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" {...props}>
        <defs>
            <linearGradient id="sw-gradient02" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1-02" stopColor="rgba(41, 128, 185, 1)" offset="0%"></stop>
                <stop id="stop2-02" stopColor="rgba(169, 204, 227, 1)" offset="100%"></stop>
            </linearGradient>
        </defs>
        <path fill="url(#sw-gradient02)" d="M19.4,-25.4C24,-19.3,25.8,-12.1,28,-4.3C30.1,3.5,32.7,11.9,29.7,17.1C26.7,22.3,18.1,24.3,10.8,25C3.4,25.8,-2.8,25.3,-10.6,24.4C-18.3,23.6,-27.7,22.5,-32.8,17.2C-37.9,11.9,-38.7,2.5,-35.5,-4.6C-32.3,-11.7,-25,-16.4,-18.4,-22.1C-11.8,-27.9,-5.9,-34.8,0.8,-35.7C7.4,-36.6,14.8,-31.5,19.4,-25.4Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" stroke="url(#sw-gradient02)"></path>
    </svg>;
};

export default Shape02;