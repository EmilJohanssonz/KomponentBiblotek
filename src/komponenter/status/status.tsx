type StatusProps = {
  isOnline: boolean;
};

const Status = ({ isOnline }: StatusProps) => {
  return (
    <p className={isOnline ? "online" : "offline"}>
      {isOnline ? "🟢 Online" : "🔴 Offline"}
    </p>
  );
};

export default Status;
