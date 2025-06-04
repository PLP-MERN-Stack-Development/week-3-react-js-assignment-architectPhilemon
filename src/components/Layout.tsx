import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Add your navbar, etc. here */}
      {children}
      {/* Add your footer, etc. here */}
    </div>
  );
}