import React, { useState } from 'react';

function MyAccordion() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const isExpanded = (index) => expandedIndex === index;

  const accordionItems = [
    {
      title: 'What is Netflix?',
      content: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.' + 
      "You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!,"
    },
    {
      title: 'How much does Netflix cost?',
      content: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
    },
    {
      title: 'Where can I watch?',
      content: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      title: 'How do I cancel?',
      content: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: 'What can I watch on Netflix?',
      content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: 'Is Netflix good for kids?',
      content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    },
  ];

  return (
    <div>
      {accordionItems.map((item, index) => (
        <div key={index}>
          <h2
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            className='bg-red flex flex-row justify-around ml-[160px] mt-[10px] hover:bg-[#414141] font-body font-normal text-[24px] bg-[#2D2D2D] p-5 h-[80%] w-[80%]'
            onClick={() => handleAccordionClick(index)}
          >
            <span style={{ flex: 1, textAlign: 'left' }} className='text-white'>
              {item.title}
            </span>
            {isExpanded(index) ? (
              <span style={{ cursor: 'pointer' }} className='text-white text-center' onClick={() => handleAccordionClick(index)}>
                x
              </span>
            ) : (
              <span style={{ cursor: 'pointer' }} className='text-white text-center ' onClick={() => handleAccordionClick(index)}>
                +
              </span>
            )}
          </h2>
          
          {isExpanded(index) && (
            <div  className='text-white h-[100%] w-[80%] bg-[#2D2D2D] ml-[160px] mt-[1px] p-5 font-body font-normal text-[24px]'>
              {item.content}
            </div>
          )}
           
        </div>
      ))}
    </div>
  );
}

export default MyAccordion;
