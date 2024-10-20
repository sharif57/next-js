'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTopicForm = ({ id, title, description }) => {
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const router = useRouter()

    console.log(id, title,description);

    const handleSubmit =async (e) =>{
        e.preventDefault()
        try {
            const res = await fetch(`https://moncurd.vercel.app/api/topics/${id}`, {
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({newTitle, newDescription})
            })

            if(!res.ok){
                throw new Error('Failed to update topic')
            }

            router.refresh()
            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }

    return <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={e => setNewTitle(e.target.value)}
                value={newTitle}
                className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />
            <input
                onChange={e => setNewDescription(e.target.value)}
                value={newDescription}
                className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Description" />
            <button className="bg-green-500 font-bold text-white py-3 px-6 w-fit">Update Topic</button>
        </form>
    </div>;
};
export default EditTopicForm;