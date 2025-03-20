import React, { useEffect } from 'react';
import { useParams } from 'react-router';

export default function Task() {
  const {id} = useParams();
  useEffect(() => {
    
  });
  return (
    <div>Task: {id}</div>
  );
}
