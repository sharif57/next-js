'use client'
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
    const router = useRouter()
    const removeTopic = async () => {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            const res = await fetch(`https://moncurd.vercel.app/api/topics?id=${id}`, {
                method: 'DELETE'
            })
            if (res.ok) {

                router.refresh()
            }
        }
    }
    return <div>
        <button onClick={removeTopic} className="text-red-400">
            <HiOutlineTrash size={24}></HiOutlineTrash>
        </button>
    </div>;
};
export default RemoveBtn;