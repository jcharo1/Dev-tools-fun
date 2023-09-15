import React, { createContext, useContext, useState } from "react";

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

  const addToast = (message) => {
    const id = new Date().getTime();
    setToasts([...toasts, { id, message }]);
    setTimeout(() => removeToast(id), 5000); // auto-remove after 5 seconds
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            {toast.message}
            <button onClick={() => removeToast(toast.id)}>X</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
