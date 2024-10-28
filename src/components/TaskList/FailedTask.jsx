import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider'; 

const FailedTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleFail = () => {
    console.log('Failing task:', data.taskTitle); 
    const updatedUserData = userData.map((user) => {
      return {
        ...user,
        tasks: user.tasks.map((task) => {
          if (task.taskTitle === data.taskTitle) {
            return { ...task, failed: true, completed: false };
          }
          return task;
        })
      };
    });

    setUserData(updatedUserData);
    console.log('Updated user data:', updatedUserData); 
  };

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='mt-6'>
        <button
          onClick={handleFail}
          className='w-full bg-red-500 rounded font-medium py-1 px-2 text-xs'
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
