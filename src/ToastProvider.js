import React, { createContext, useContext, useState, useEffect } from "react";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [visibleToasts, setVisibleToasts] = useState([]);
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    if (toasts.length > 3) {
      setQueue(toasts.slice(0, -3));
      setVisibleToasts(toasts.slice(-3).map((t) => t.id));
    } else {
      setVisibleToasts(toasts.map((t) => t.id));
    }
  }, [toasts]);

  const addToast = (message) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, message }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));

    if (queue.length > 0) {
      const nextToast = queue[0];
      setQueue(queue.slice(1));
      setVisibleToasts((prevVisibleToasts) => [
        ...prevVisibleToasts,
        nextToast.id,
      ]);
    }
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="toast-container">
        {[...toasts].reverse().map((toast) => (
          <div
            key={toast.id}
            className={`toast ${
              visibleToasts.includes(toast.id) ? "show" : ""
            }`}
          >
            <div className="message">{toast.message}</div>
            <button onClick={() => removeToast(toast.id)}>X</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
