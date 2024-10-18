// import EditTopicForm from "@/components/EditTopicForm";

// const getTopics = async(id)=>{
//     try {
//         const res = await fetch(`https://moncurd.vercel.app//api/topics/${id}`, {
//             cache: 'no-cache',
//         })

//         if(!res.ok){
//             throw new Error('Failed to fetch topic')
//         }
//         return res.json()
//     } catch (error) {
//         console.log(error);
//     }
// }

// const EditTopic = async({params}) => {
//     const {id} = params;
//   const {topic}=  await getTopicsById(id)
//     // console.log('id', id);
//     const {title, description} = topic;
//   return <div>
//     <EditTopicForm id={id} title={title} description={description}></EditTopicForm>
//   </div>;
// };
// export default EditTopic;

import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
    try {
        const res = await fetch(`https://moncurd.vercel.app/api/topics/${id}`, {
            cache: 'no-cache',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch topic');
        }

        return res.json();
    } catch (error) {
        console.error(error);
        return null; // Return null in case of an error
    }
}

const EditTopic = async ({ params }) => {
    const { id } = params;
    const topicData = await getTopicById(id);

    if (!topicData) {
        return <p>Error loading topic data.</p>; // Handle the case where topic data is not available
    }

    const { title, description } = topicData;

    return (
        <div>
            <EditTopicForm id={id} title={title} description={description} />
        </div>
    );
};

export default EditTopic;
