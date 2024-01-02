import React from 'react'
import { blogs } from '../../utils/Utils'
import styled from '@emotion/styled'

const BlogContainer = styled('div')({
  padding: '70px 9vw 70px 9vw',
  background: '#fbfbfb',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
const Heading = styled('h2')({
  color: '#0f0049',
  fontSize: '40px',
  fontWeight: '700',
  lineHeight: '60px',
  margin: '0 0 30px 0',
})
const BlogsWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  padding: '0 0 188px 0',
})
const Blog = styled('div')({
  position: 'relative',
})
const BlogImage = styled('img')({
  maxWidth: '366px',
  maxHeight: '450px',
})
const BlogSubSection = styled('div')({
  background: '#fff',
  position: 'absolute',
  padding: '20px',
  right: '0',
  bottom: '-30%',
  width: '80%',
})
const SubHeading = styled('h3')({
  color: '#0f0049',
  fontSize: '24px',
  fontWeight: '500',
  margin: '0 0 10px 0',
})
const CustomSpan = styled('span')({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
})
const Description = styled('p')({
  color: '#0F0049',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '20px',
  margin: '0',
  opacity: '0.5',
})
const Arrow = styled('img')({
  width: '18px',
  height: '18px',
  margin: '15px 0 0 0',
  cursor: 'pointer',
})

export default function Blogs() {
  return (
    <BlogContainer>
      <Heading>Our Blogs</Heading>
      <BlogsWrapper>
        {blogs.map((blog, i) => {
          return (
            <Blog className="blog" key={i}>
              <BlogImage src={blog.image} alt={blog.title} />
              <BlogSubSection>
                <SubHeading>{blog.title}</SubHeading>
                <Description>{blog.desc}</Description>
                <CustomSpan>
                  <Arrow src="images/rightArrow.png" alt="" />
                </CustomSpan>
              </BlogSubSection>
            </Blog>
          )
        })}
      </BlogsWrapper>
      <button>View all posts</button>
    </BlogContainer>
  )
}
