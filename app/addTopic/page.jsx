'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure both title and description are provided
        if (!title || !description) {
            alert('Title and Description are required.');
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description })
            });

            if (res.ok) {
                // Redirect to homepage or desired route on success
                router.refresh()
                router.push('/');
            } else {
                throw new Error('Failed to create topic');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while creating the topic.');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Topic Title"
                />
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Topic Description"
                />
                <button type="submit" className="bg-green-500 font-bold text-white py-3 px-6 w-fit">
                    Add Topic
                </button>
            </form>
        </div>
    );
};

export default Page;
