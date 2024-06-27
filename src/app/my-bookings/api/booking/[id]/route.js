import { connectDB } from "@/lib/connectDB";

 export const DELETE = async(request, {params})=> {
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings')
    try {
        const res = await bookingsCollection.deleteOne({_id: params.id});
        return Response.json({message: "Deleted Successfully", response: res})
    } catch (error) {
        return Response.json({message: "Something went wrong"}, {error})
    }
 }

 export const PATCH = async(request, {params})=> {
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings')
    const updateDoc = await request.json();
    try {
        const res = await bookingsCollection.updateOne({_id: params.id},
            {
                $set: {
                   ...updateDoc,
                }
            },
            {
                upsert:true,
            }
        );
        return Response.json({message: "Updated Successfully", response: res})
    } catch (error) {
        return Response.json({message: "Something went wrong"}, {error})
    }
 }

 export const GET = async(request, {params})=> {
    const db = await connectDB();
    const bookingsCollection = db.collection('bookings')
    try {
        const res = await bookingsCollection.findOne({_id: params.id});
        return Response.json({message: "Booking found!", data: res})
    } catch (error) {
        return Response.json({message: "Something went wrong"}, {error})
    }
 }