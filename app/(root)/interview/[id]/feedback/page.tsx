import React from 'react'
import {getCurrentUser} from "@/lib/actions/auth.action";
import {getFeedbackByInterviewId, getInterviewsById} from "@/lib/actions/general.action";
import {redirect} from "next/navigation";

const Page = ({ params } : Routeparams) => {
    const {id} = await params;
    const user = await getCurrentUser();

    const interview = await getInterviewsById(id);
    if (!interview) redirect('/');

    const feedback = await getFeedbackByInterviewId({
        interviewId,
        userId: user?.id!,

    });

    console.log(feedback);


    return (
        <div>Page</div>
    )
}
export default Page
