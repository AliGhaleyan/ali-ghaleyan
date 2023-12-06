import React, { useEffect, useState } from "react";

const ClientOnly = ({ children }: React.PropsWithChildren) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
