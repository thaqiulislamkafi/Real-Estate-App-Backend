import { app } from "./app";
import { seedAdmin } from "./app/utils/seedAdmin";
import { env } from "./config/env.config";

const bootStrap = async()=>{

    const PORT = Number(env.PORT) ;

    try {
        await seedAdmin() ;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        }   
    );
    } catch (error) {
        console.log("Failed to start the server", error);
    }
}

bootStrap();

