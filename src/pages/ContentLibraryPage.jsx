import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/apiService';

const ContentLibraryPage = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchContent().then(setContent);
  }, []);

  return (
    <section>
      <h1>Biblioteca de Contenidos</h1>
      <ul>
        {content.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default ContentLibraryPage;
