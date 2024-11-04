const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color;
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        break; 

      case "ongoing":
        color = "bg-yellow-200";
        break; 

      case "pending":
        color = "bg-red-200";
        break; 

      default:
        color = "bg-slate-700";
        break; 
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )} uppercase`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
