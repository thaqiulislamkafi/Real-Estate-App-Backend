import { app } from "./app";
import { env } from "./config/env.config";


const bootStrap =()=>{

    const PORT = env.PORT
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        }   
    );
    } catch (error) {
        console.log("Failed to start the server", error);
    }
}

bootStrap();

