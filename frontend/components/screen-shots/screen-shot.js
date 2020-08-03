const ScreenShot = ({src, alt, caption}) => (
    <div>
        <p>screenshot</p>
        <img
            src={src}
            alt={alt}
        />
        <p>{caption}</p>
    </div>
);

export default ScreenShot;