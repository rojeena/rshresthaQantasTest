const isSaleStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "4px 12px",
    borderBottomRightRadius: 12,
    backgroundColor: "#bff4f2",
};
const overFlowingTitleStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontWeight: 400,
    marginBottom: 8,
}

const Title = ({ isSale, name, description}) => (<>
    {
        isSale && <div style={isSaleStyle}>
            Sale
        </div>
    }

    <h4
        style={{
            ...overFlowingTitleStyle,
            fontSize: 18,
        }}
    >
        {name}
    </h4>

    <div style={{
        ...overFlowingTitleStyle,
        fontSize: 14,
    }}>
        {description}
    </div>
</>);

export default Title;