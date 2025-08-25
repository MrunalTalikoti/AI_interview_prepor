import {db} from "@/firebase/admin";

export async function getInterviewsByUserId(userId: string): Promise<Interview[] | null> {
    const interviews = await db.collection('interviews').where('userId', '==', userId).orderBy('createdAt', 'desc').get();

    return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Interview[];
}

export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null> {
    const {userId, limit = 20 } = params;

    if (!userId) {
        // If no userId, just return latest finalized interviews
        const fallback = await db
            .collection('interviews')
            .where('finalized', '==', true)
            .orderBy('createdAt', 'desc')
            .limit(limit)
            .get();

        return fallback.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        })) as Interview[];
    }


    const interviews = await db
        .collection('interviews')
        .where('finalized', '==', true)
        .where('userId', '!=', userId )
        .orderBy('userId')
        .orderBy('createdAt', 'desc')
        .limit(limit)
        .get();

    return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Interview[];
}

export async function getInterviewsById(id: string): Promise<Interview | null> {
    const interview = await db
        .collection('interviews')
        .doc(id)
        .get();

    return interview.data() as Interview | null;
}