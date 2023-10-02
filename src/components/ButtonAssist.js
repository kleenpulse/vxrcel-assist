import React, { useState } from 'react';
import assit from '../pointer.gif'
const ButtonAssistant = () => {
  const [list] = useState({
    button1: "CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in HTML or XML",
    button2: "HTML (HyperText Markup Language) is the standard markup language for creating web pages, defining the structure and content of a webpage through a series of elements, tags, and attributes.",

    button3: "TypeScript offers static typing and enhanced code quality, making it preferable for larger, complex projects, while JavaScript provides flexibility and ease of use, making it suitable for smaller projects and rapid development.",
    button4: "Web 3 refers to a decentralized internet ecosystem utilizing blockchain technology, enabling peer-to-peer interactions, secure transactions, and user control over data, reshaping online experiences beyond centralized control.",

    button5: "ChatGPT is an advanced language model created by OpenAI, capable of generating human-like text responses.",


  });

  const [descriptionText, setDescriptionText] = useState('Select a button to see helpful Tip.');
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const [modelContainerPosition, setModelContainerPosition] = useState({
    top: 0,
    left: 0,
    bottom: 'unset',
    right: 'unset',
    height: '400px',
    width: '300px',
    background: 'white',
  });

  const moveModelContainer = (xPos, yPos, height) => {
    setModelContainerPosition({
      position: 'absolute',
      top: `${yPos + height}px`,
      left: `${xPos}px`,
      bottom: 'unset',
      right: 'unset',
      height: '400px',
      width: '300px',
      background: 'white',
    });
  };

  const handleButtonClick = (buttonId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDescriptionText(list[`button${buttonId}`]);
    setIsDescriptionVisible(true);

    const xPos = e.target.getBoundingClientRect().x;
    const yPos = e.target.getBoundingClientRect().y;
    const height = e.target.getBoundingClientRect().height;

    moveModelContainer(xPos, yPos, height);
  };


  return (
    <div className='  '>
      <section className='h-full'>
        <h1 className='text-center text-3xl py-6 font-bold'>Vxrcel Assistant</h1>

        <div className="btn-all grid container items-center justify-center mb-12 px-auto mx-auto grid-cols-3 gap-20">
          <button onClick={(e) => handleButtonClick(1, e)} data-id="1" className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer bg-black text-white'>
            What is CSS
          </button>
          <button onClick={(e) => handleButtonClick(2, e)} data-id="2" className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer bg-black text-white'>
            What is HTML
          </button>
          <button onClick={(e) => handleButtonClick(3, e)} data-id="3" className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer bg-black text-white'>
            TypeScript or JS
          </button>
          <button onClick={(e) => handleButtonClick(4, e)} data-id="4" className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer bg-black text-white'>
            Web 3?
          </button>
          <button onClick={(e) => handleButtonClick(5, e)} data-id="5" className='rounded-lg my-7 shadow-md w-48 font-medium text-xl py-1 cursor-pointer bg-black text-white'>
            Chat GPT
          </button>

        </div>
        <div className="model flex justify-end align-end" style={modelContainerPosition}>
          <div id="container"></div>
          <img src={assit} className='w-12 h-12 rounded-lg shadow-lg opacity-50' alt="assistant" />
          <p className="descriptions  w-64 rounded-lg text-lg font-medium p-2 shadow-lg h-24" style={isDescriptionVisible ? { display: 'block' } : { display: 'none' }}>{descriptionText}</p>
        </div>
      </section>
    </div>
  );
};

export default ButtonAssistant;
