import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import TaskForm from './TaskForm';

export default function Task() {
  const {id} = useParams();
  useEffect(() => {
    
  });
  return (
    <>
      <div>Task: {id}</div>
      <TaskForm></TaskForm>
    </>

  );
}
