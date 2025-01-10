const Image = ({src, alt}) =>
    <div
    style={{
        margin: "12px auto"
    }}>
        <img style={{ maxHeight: 220 }} src={src} alt={alt} />
    </div>;

export default Image;