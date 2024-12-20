interface ChatHeaderProps {
  title: string;
  requesting: boolean;
}

const ChatHeader = ({ title, requesting }: ChatHeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h6
            style={{ fontWeight: "bold", color: "#FFFFFF" }}
          >
            {title}
          </h6>
          <div
            style={{
              backgroundColor: requesting ? "#2980b9" : "#27ae60",
              padding: "2px 12px",
              borderRadius: "12px",
              width: "fit-content",
            }}
          >
            <p
              style={{ color: "#FFFFFF", fontWeight: "bold" }}
            >
              {requesting ? "Consultando..." : "Online"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
