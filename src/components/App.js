import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App() {
  const appStyles = {
    backgroundColor: "paleGreen"
  }
  return (
    <div style={appStyles}>
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
    </div>
  );
}

export default App;