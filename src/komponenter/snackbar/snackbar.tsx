import React, { useState } from "react";

const Snackbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const showSnackbar = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <div>
      <button
        onClick={showSnackbar}
        className="p-2 bg-green-500 text-white rounded-md"
      >
        Show Snackbar
      </button>
      {visible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-blue-600 text-white rounded-lg shadow-lg">
          This is a snackbar message!
        </div>
      )}
    </div>
  );
};

export default Snackbar;
