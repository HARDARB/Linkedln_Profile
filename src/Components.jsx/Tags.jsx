import React from 'react';




function Tags({ tags }) {

    
  return (
    <div className="flex gap-3 mt-4 flex-wrap">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-gray-700 px-3 py-1 rounded-xs text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;