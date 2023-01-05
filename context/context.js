import { createContext, useState } from "react";
export const TorrentContext = createContext();
const TorrentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <TorrentContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </TorrentContext.Provider>
  );
};

export default TorrentProvider;
