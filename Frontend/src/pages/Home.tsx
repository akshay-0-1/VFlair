import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const [input, setInput] = useState('');
  const [option, setOption] = useState('summary'); // Default option
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Input: ${input}, Option: ${option}`);
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 300)}px`; // Max height of 300px
    }
  }, [input]);

  return (
    <div className="container mx-auto p-4 pt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Summarization Tool</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="relative mb-4 w-full max-w-md">
          <div className="flex items-center border rounded-lg shadow-lg overflow-hidden bg-white">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter the link here..."
              className="p-3 border-none w-full focus:outline-none text-gray-700 text-sm bg-gray-50"
              style={{
                resize: 'none',
                borderRadius: '0',
                height: '40px',
                paddingLeft: '12px',
              }}
            />
            <select
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="p-3 border-none bg-gray-50 text-gray-700 text-sm focus:outline-none"
              style={{
                width: '120px',
                borderLeft: '1px solid #ccc',
                paddingLeft: '8px',
              }}
            >
              <option value="summary">Summary</option>
              <option value="blog">Blog</option>
              <option value="notes">Notes</option>
            </select>
          </div>
        </div>
        <button type="submit" className="mt-4 p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
          Summarize
        </button>
      </form>
      <p className="mt-4 text-gray-600 text-center">Enter a link and select an option to get started!</p>
    </div>
  );
};

export default Home;
