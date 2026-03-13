import { app } from "./app";

const PORT = process.env.PORT || 5000;

const bootStrap =()=>{

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

