import { useState } from 'react'

const examplePosts = [
  {
    title: 'Post 1',
    content: 'This is the first post'
  },
  {
    title: 'Post 2',
    content: 'This is the second post'
  },
  {
    title: 'Post 3',
    content: 'This is the third post'
  },
  {
    title: 'Post 4',
    content: 'This is the fourth post'
  },
  {
    title: 'Post 5',
    content: 'This is the fifth post'
  },
  {
    title: 'Post 6',
    content: 'This is the sixth post'
  },
  {
    title: 'Post 7',
    content: 'This is the seventh post'
  },
  {
    title: 'Post 8',
    content: 'This is the eighth post'
  },
  {
    title: 'Post 9',
    content: 'This is the ninth post'
  },
  {
    title: 'Post 10',
    content: 'This is the tenth post'
  },
]


const DynamicLayout = () => {
  const [layout, setLayout] = useState('option1')

  const classesForLayout = {
    'option1': 'layout1',
    'option2': 'layout2',
    'option3': 'layout3'
  }

  const classesForPost = {
    'option1': 'post1',
    'option2': 'post2',
    'option3': 'post3'
  }

  const handleLayoutChange = (layout) => {
    setLayout(layout)
  }

  return (
    <div>
      <div>
        <select
          onChange={(e) => handleLayoutChange(e.target.value)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className={`${classesForLayout[layout]}`}>
        {
          examplePosts.map((post, index) => {
            return (
              <div className={`${classesForPost[layout]}`} key={index}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default DynamicLayout