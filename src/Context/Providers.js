import React from "react";
import { ListIdProvider } from "./ListIdContext";


const Providers =({children})=>{
return(
<ListIdProvider>
{children}
</ListIdProvider>
);
}
export default Providers;