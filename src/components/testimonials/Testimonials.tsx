import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { testimonials } from '../../utils/Utils'
import styled from '@emotion/styled'

const TestimonialWrapper = styled('div')({
  padding: '13vh 9vw 10vh 9vw',
  overflow: 'auto',
  position: 'relative',
})
const Testimonial = styled('div')({
  display: 'flex',
  gap: '80px',
  textAlign: 'left',
})
const TestimonialImage = styled('img')({
  width: '350px !important',
  height: '450px',
})
const Text = styled('p')({
  color: '#47536b',
  fontSize: '20px',
  fontWeight: '500',
})
const Arrows = styled('div')({
  position: 'absolute',
  display: 'flex',
  gap: '20px',
  bottom: '90px',
  right: '90px',
})

export default function Testimonials() {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0)

  const handleArrowClick = (side: String) => {
    if (side === 'left') {
      setCurrentTestimonialSlide(
        (prevSlide) =>
          (prevSlide - 1 + testimonials.length) % testimonials.length,
      )
    } else {
      setCurrentTestimonialSlide(
        (prevSlide) => (prevSlide + 1) % testimonials.length,
      )
    }
  }

  return (
    <TestimonialWrapper>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={currentTestimonialSlide}
        autoPlay={true}
        interval={2000}
        onChange={(index) => setCurrentTestimonialSlide(index)}
      >
        {testimonials.map((testimonial, i) => (
          <Testimonial key={i}>
            <TestimonialImage src={testimonial.image} alt={testimonial.title} />
            <div>
              <Text>{testimonial.desc}</Text>
              <Text style={{ fontSize: '18px' }}>
                <span style={{ fontWeight: '600' }}>{testimonial.title}</span> -{' '}
                {testimonial.designation}
              </Text>
            </div>
          </Testimonial>
        ))}
      </Carousel>
      <Arrows className="arrows">
        <img
          src="/images/leftArrow.png"
          alt=""
          onClick={() => handleArrowClick('left')}
        />
        <img
          src="/images/rightArrow.png"
          alt=""
          onClick={() => handleArrowClick('right')}
        />
      </Arrows>
    </TestimonialWrapper>
  )
}
