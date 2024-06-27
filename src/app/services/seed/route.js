import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services";

export const GET = async ()=> {
    const db = await connectDB();
    const servicesCollection = db.collection("services");
    try {
        await servicesCollection.deleteMany();
        const res = await servicesCollection.insertMany(services)
        return Response.json({
            message: "Seeded Successfully!"
        }, {status: 200})
    } catch (error) {
       console.log(error.message) 
    }
}