import React, { useState } from 'react';
import JoditEditor from 'jodit-react';
import "../css/add.css";
import Header from './Header';

const PostForm = () => {
  const [category, setCategory] = useState<string>('');
  const [subcategory, setSubcategory] = useState<string>('');
  const [categoryType, setCategoryType] = useState<string>('');
  const [definition, setDefinition] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const categories = [
    "Get a New Job",
    "Develop and Renew Skills",
    "Personal Marketing",
    "Start and Develop My Business",
    "Help, I Don't Know What I Want",
    "Work in Sweden (in English)",
  ];

  const categoryTypes = [
    "Article",
    "Counselling",
    "Guide",
  ];

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleSubcategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubcategory(event.target.value);
  };

  const handleCategoryTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryType(event.target.value);
  };

  const handleDefinitionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDefinition(event.target.value);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value);
  };

  const handleDetailsChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postData = {
      category,
      subcategory,
      category_type: categoryType,
      definition,
      duration,
      content
    };

    try {
      const response = await fetch('http://localhost:5000/addData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log('Post submitted successfully!');
      } else {
        const errorData = await response.json();
        console.error('Failed to submit post:', errorData);
      }
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="subcategory">Subcategory:</label>
          <input
            type="text"
            id="subcategory"
            value={subcategory}
            onChange={handleSubcategoryChange}
          />
        </div>
        <div>
          <label htmlFor="categoryType">Category Type:</label>
          <select id="categoryType" value={categoryType} onChange={handleCategoryTypeChange}>
            <option value="">Select a category type</option>
            {categoryTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="definition">Definition:</label>
          <input
            type="text"
            id="definition"
            value={definition}
            onChange={handleDefinitionChange}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={handleDurationChange}
          />
        </div>
        <div>
          <label htmlFor="details">Details:</label>
          <JoditEditor
            value={content}
            onChange={handleDetailsChange}
          />
        </div>
        <button type="submit" className='button1'>Add Post</button>
      </form>
    </div>
  );
};

export default PostForm;
