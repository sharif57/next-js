import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from 'react-icons/hi';

const getTopics = async () => {
    try {
        const res = await fetch('https://moncurd.vercel.app/api/topics', {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch topics');
        }
        return res.json();
    } catch (error) {
        console.log('Error loading topics', error);
        return { topics: [] }; // Return an empty array in case of error
    }
}

export default async function TopicsList() {
    const { topics } = await getTopics();
    return (
        <div>
            {topics.map((top) => (
                <div key={top.id} className="p-4 border border-slate-500 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h1 className="font-bold text-2xl">{top.title}</h1>
                        <p>{top.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <RemoveBtn id={top._id} />
                        <Link href={`/editTopic/${top._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};
