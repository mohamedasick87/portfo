// App.js
import React from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
    return (
        <div>
            <h1>Welcome to My Website</h1>
            {/* Other components */}
            <Analytics />
        </div>
    );
}

export default App;
